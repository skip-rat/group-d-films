import { getEnv, SERVER_PORT } from "./configs/server.config";
const environment = getEnv();

import { app, LOG_SERVER_OUTPUT } from "./app";
import { Server } from "http";

const PORT = SERVER_PORT;

console.log(`🌍 Running in ${environment} environment`);

try {
	const server = app.listen(PORT, () => {
		if(LOG_SERVER_OUTPUT) console.log(`Server is now listening on port: ${PORT}`);
	})
	.on("error", (error) => {
		console.error("Express Error");
		console.error(error);
	});

	process.on("SIGINT", () => handleShutdown(server));
	process.on("SIGTERM", () => handleShutdown(server));
	process.on("SIGHUP", () => handleShutdown(server));

  process.on("SIGINT", () => handleShutdown(server));
  process.on("SIGTERM", () => handleShutdown(server));
  process.on("SIGHUP", () => handleShutdown(server));
} catch (e: unknown) {
  console.error("🚨 Top level Error caught 🚨 ");
  console.error((e as Error).message);
}

function handleShutdown(server: Server) {
  server.close(() => {
    process.exit(0);
  });
}
