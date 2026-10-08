import { AssistantStream } from "../AssistantStream";
import { DataStreamEncoder } from "../serialization/data-stream/DataStream";
import {
  createAssistantStream,
  type AssistantStreamController,
} from "./openagentui-stream";

/**
 * Creates a `Response` whose body is an encoded {@link AssistantStream}.
 *
 * This is the HTTP-route convenience form of {@link createAssistantStream}; it
 * uses {@link DataStreamEncoder} so the response can be consumed by matching
 * openagentui data stream decoders.
 */
export function createAssistantStreamResponse(
  callback: (controller: AssistantStreamController) => PromiseLike<void> | void,
) {
  return AssistantStream.toResponse(
    createAssistantStream(callback),
    new DataStreamEncoder(),
  );
}
