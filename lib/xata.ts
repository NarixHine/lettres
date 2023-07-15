// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "lettres",
    columns: [
      { name: "desc", type: "string" },
      { name: "pin", type: "bool", notNull: true, defaultValue: "false" },
      { name: "cover", type: "string" },
      { name: "title", type: "string", notNull: true, defaultValue: "" },
      { name: "tags", type: "multiple" },
      { name: "body", type: "text", notNull: true, defaultValue: "" },
    ],
  },
  {
    name: "tags",
    columns: [
      { name: "tag", type: "string", unique: true },
      { name: "desc", type: "text" },
    ],
  },
  { name: "settings", columns: [{ name: "config", type: "multiple" }] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Lettres = InferredTypes["lettres"];
export type LettresRecord = Lettres & XataRecord;

export type Tags = InferredTypes["tags"];
export type TagsRecord = Tags & XataRecord;

export type Settings = InferredTypes["settings"];
export type SettingsRecord = Settings & XataRecord;

export type DatabaseSchema = {
  lettres: LettresRecord;
  tags: TagsRecord;
  settings: SettingsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Lettres-ai3lvl.us-east-1.xata.sh/db/lettres",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
