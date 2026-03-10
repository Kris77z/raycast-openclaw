/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Endpoint - OpenClaw gateway URL. Use http://127.0.0.1:18789 for local, or your Tailscale serve URL (e.g., https://machine-name.tailnet.ts.net) for remote access. */
  "endpoint": string,
  /** API Token - Find in ~/.openclaw/openclaw.json under gateway.auth.token */
  "token": string,
  /** Agent ID - Which OpenClaw agent to use */
  "agentId": string,
  /** Main Session Key - Optional main key override for session keys (default: main) */
  "mainKey": string,
  /** Web UI Base URL - Optional UI URL override (official WebUI or LobsterBoard). Defaults to endpoint. */
  "webUiBaseUrl"?: string,
  /** Default Profile ID - Default profile id when profilesJson is configured. */
  "defaultProfileId": string,
  /** Profiles JSON - Optional array of profiles: [{"id":"solo","name":"Solo","endpoint":"...","token":"...","agentId":"main","mainKey":"main","webUiBaseUrl":"..."}] */
  "profilesJson"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `chat` command */
  export type Chat = ExtensionPreferences & {}
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
  /** Preferences accessible in the `open-webchat` command */
  export type OpenWebchat = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `chat` command */
  export type Chat = {}
  /** Arguments passed to the `status` command */
  export type Status = {}
  /** Arguments passed to the `open-webchat` command */
  export type OpenWebchat = {}
}

