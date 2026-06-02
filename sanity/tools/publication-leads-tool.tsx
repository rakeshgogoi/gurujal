/**
 * Custom Studio tool — "Publication leads".
 *
 * Lives in the left nav alongside Content and Vision. Lists every
 * publicationLead document in a flat table (newest-first) and has a
 * single "Download CSV" button that builds a spreadsheet on the
 * client and triggers a download. No back-end endpoint needed for the
 * export: the logged-in Sanity user's session token already gates the
 * data, same as any other Studio view.
 *
 * Keeping the UI dependency-free (plain Tailwind-ish inline styles +
 * @sanity/ui primitives only) so we don't pull in a heavy table
 * library for what's effectively a CSV preview.
 */
import { useEffect, useMemo, useState } from "react";
import { useClient } from "sanity";
import {
  Card,
  Stack,
  Text,
  Heading,
  Button,
  Flex,
  Spinner,
  Box,
} from "@sanity/ui";
import { DownloadIcon, RefreshIcon } from "@sanity/icons";
import { apiVersion } from "../env";

type Lead = {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  publicationTitle?: string;
  pdfSrc?: string;
  accessedAt?: string;
};

const QUERY = `*[_type == "publicationLead"] | order(accessedAt desc){
  _id, name, email, phone, publicationTitle, pdfSrc, accessedAt
}`;

/** RFC 4180 CSV cell — wrap in quotes and escape embedded quotes. */
function csvCell(value: unknown): string {
  const s = value == null ? "" : String(value);
  // Always quote; it's harmless and avoids edge cases with commas/
  // newlines/leading-whitespace.
  return `"${s.replace(/"/g, '""')}"`;
}

function buildCsv(rows: Lead[]): string {
  const header = [
    "Name",
    "Email",
    "Phone",
    "Publication",
    "PDF source",
    "Accessed at (ISO)",
  ];
  const lines = [header.map(csvCell).join(",")];
  for (const r of rows) {
    lines.push(
      [r.name, r.email, r.phone, r.publicationTitle, r.pdfSrc, r.accessedAt]
        .map(csvCell)
        .join(",")
    );
  }
  // Prepend BOM so Excel opens UTF-8 correctly.
  return "﻿" + lines.join("\r\n");
}

function downloadCsv(rows: Lead[]) {
  const blob = new Blob([buildCsv(rows)], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `gurujal-publication-leads-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function fmtDate(iso?: string): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function PublicationLeadsTool() {
  const client = useClient({ apiVersion });
  const [rows, setRows] = useState<Lead[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useMemo(
    () => async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await client.fetch<Lead[]>(QUERY);
        setRows(result || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Could not load leads");
      } finally {
        setLoading(false);
      }
    },
    [client]
  );

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Card padding={4} height="fill" tone="default">
      <Stack space={4}>
        <Flex align="center" gap={3}>
          <Box flex={1}>
            <Heading as="h1" size={3}>
              Publication leads
            </Heading>
            <Text size={1} muted style={{ marginTop: 4 }}>
              Visitors who unlocked a gated publication PDF. Newest
              first.
            </Text>
          </Box>
          <Button
            mode="ghost"
            icon={RefreshIcon}
            text="Refresh"
            onClick={load}
            disabled={loading}
          />
          <Button
            tone="primary"
            icon={DownloadIcon}
            text="Download CSV"
            onClick={() => rows && downloadCsv(rows)}
            disabled={loading || !rows || rows.length === 0}
          />
        </Flex>

        {loading && (
          <Flex align="center" gap={2}>
            <Spinner muted />
            <Text size={1} muted>
              Loading…
            </Text>
          </Flex>
        )}

        {error && (
          <Card tone="critical" padding={3} radius={2}>
            <Text size={1}>{error}</Text>
          </Card>
        )}

        {!loading && !error && rows && rows.length === 0 && (
          <Card tone="transparent" padding={4} radius={2} border>
            <Text size={1} muted>
              No leads yet. Submissions will show up here as soon as
              someone unlocks a publication.
            </Text>
          </Card>
        )}

        {rows && rows.length > 0 && (
          <Card radius={2} border overflow="auto">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}
            >
              <thead>
                <tr style={{ background: "var(--card-muted-bg-color)" }}>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Publication</Th>
                  <Th>Accessed</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r._id}
                    style={{
                      borderTop:
                        "1px solid var(--card-border-color)",
                    }}
                  >
                    <Td>{r.name || "—"}</Td>
                    <Td>{r.email || "—"}</Td>
                    <Td>{r.phone || "—"}</Td>
                    <Td>{r.publicationTitle || "—"}</Td>
                    <Td>{fmtDate(r.accessedAt)}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {rows && rows.length > 0 && (
          <Text size={1} muted>
            {rows.length} {rows.length === 1 ? "lead" : "leads"} total.
          </Text>
        )}
      </Stack>
    </Card>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "10px 12px",
        fontWeight: 600,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: "var(--card-muted-fg-color)",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: "10px 12px",
        verticalAlign: "top",
        color: "var(--card-fg-color)",
      }}
    >
      {children}
    </td>
  );
}
