import {
  createInMemoryResumableStreamStore,
  createResumableStreamContext,
} from "openagentui-stream/resumable";
import { after } from "next/server";

const store = createInMemoryResumableStreamStore();
export const resumableContext = createResumableStreamContext({
  store,
  waitUntil: (promise) => after(promise),
});
