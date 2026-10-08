## aui-perf nightly record

_1 points · 2026-10-08T04:44:32.688Z to 2026-10-08T04:44:32.688Z · latest runner: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.413ms |  |  | 1.413ms | 1.413ms | 1 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.537ms |  |  | 1.537ms | 1.537ms | 1 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 77.77µs |  |  | 77.77µs | 77.77µs | 1 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 846.98µs |  |  | 846.98µs | 846.98µs | 1 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 13.053ms |  |  | 13.053ms | 13.053ms | 1 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 378.69µs |  |  | 378.69µs | 378.69µs | 1 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 3.281ms |  |  | 3.281ms | 3.281ms | 1 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 13.004ms |  |  | 13.004ms | 13.004ms | 1 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 15.14µs |  |  | 15.14µs | 15.14µs | 1 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 121.47µs |  |  | 121.47µs | 121.47µs | 1 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 485.68µs |  |  | 485.68µs | 485.68µs | 1 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 76.13µs |  |  | 76.13µs | 76.13µs | 1 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 753.20µs |  |  | 753.20µs | 753.20µs | 1 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 11.01µs |  |  | 11.01µs | 11.01µs | 1 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 90.22µs |  |  | 90.22µs | 90.22µs | 1 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 1.179ms |  |  | 1.179ms | 1.179ms | 1 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 9.821ms |  |  | 9.821ms | 9.821ms | 1 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 37.584ms |  |  | 37.584ms | 37.584ms | 1 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 703.86µs |  |  | 703.86µs | 703.86µs | 1 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 6.046ms |  |  | 6.046ms | 6.046ms | 1 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 24.032ms |  |  | 24.032ms | 24.032ms | 1 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 58.39µs |  |  | 58.39µs | 58.39µs | 1 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 611.05µs |  |  | 611.05µs | 611.05µs | 1 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.397ms |  |  | 3.397ms | 3.397ms | 1 |
| external-message-conversion › core: external message tool results › 100 matches | 83.17µs |  |  | 83.17µs | 83.17µs | 1 |
| external-message-conversion › core: external message tool results › 1000 matches | 852.76µs |  |  | 852.76µs | 852.76µs | 1 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.731ms |  |  | 4.731ms | 4.731ms | 1 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 51.42µs |  |  | 51.42µs | 51.42µs | 1 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 489.98µs |  |  | 489.98µs | 489.98µs | 1 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.769ms |  |  | 2.769ms | 2.769ms | 1 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.27µs |  |  | 0.27µs | 0.27µs | 1 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.52µs |  |  | 0.52µs | 0.52µs | 1 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.53µs |  |  | 2.53µs | 2.53µs | 1 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.84µs |  |  | 0.84µs | 0.84µs | 1 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.63µs |  |  | 4.63µs | 4.63µs | 1 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 41.48µs |  |  | 41.48µs | 41.48µs | 1 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 159.00µs |  |  | 159.00µs | 159.00µs | 1 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 994.85µs |  |  | 994.85µs | 994.85µs | 1 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.655ms |  |  | 2.655ms | 2.655ms | 1 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.992ms |  |  | 2.992ms | 2.992ms | 1 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 16.557ms |  |  | 16.557ms | 16.557ms | 1 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 17.768ms |  |  | 17.768ms | 17.768ms | 1 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.784ms |  |  | 1.784ms | 1.784ms | 1 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.195ms |  |  | 3.195ms | 3.195ms | 1 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.793ms |  |  | 9.793ms | 9.793ms | 1 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.180ms |  |  | 1.180ms | 1.180ms | 1 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.709ms |  |  | 1.709ms | 1.709ms | 1 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.343ms |  |  | 4.343ms | 4.343ms | 1 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 305.15µs |  |  | 305.15µs | 305.15µs | 1 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.495ms |  |  | 2.495ms | 2.495ms | 1 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 354.777ms |  |  | 354.777ms | 354.777ms | 1 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 12.037ms |  |  | 12.037ms | 12.037ms | 1 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 4.55µs |  |  | 4.55µs | 4.55µs | 1 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 21.65µs |  |  | 21.65µs | 21.65µs | 1 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 90.02µs |  |  | 90.02µs | 90.02µs | 1 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 6.01µs |  |  | 6.01µs | 6.01µs | 1 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 26.88µs |  |  | 26.88µs | 26.88µs | 1 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 60.24µs |  |  | 60.24µs | 60.24µs | 1 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 585.75µs |  |  | 585.75µs | 585.75µs | 1 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.885ms |  |  | 6.885ms | 6.885ms | 1 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.124ms |  |  | 42.124ms | 42.124ms | 1 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 358.111ms |  |  | 358.111ms | 358.111ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 784.19µs |  |  | 784.19µs | 784.19µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.131ms |  |  | 1.131ms | 1.131ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 5.579ms |  |  | 5.579ms | 5.579ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 679.97µs |  |  | 679.97µs | 679.97µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.602ms |  |  | 2.602ms | 2.602ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 38.535ms |  |  | 38.535ms | 38.535ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 758.11µs |  |  | 758.11µs | 758.11µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 2.048ms |  |  | 2.048ms | 2.048ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 32.325ms |  |  | 32.325ms | 32.325ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 355.22µs |  |  | 355.22µs | 355.22µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 624.09µs |  |  | 624.09µs | 624.09µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 4.209ms |  |  | 4.209ms | 4.209ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 19.76µs |  |  | 19.76µs | 19.76µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 33.45µs |  |  | 33.45µs | 33.45µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 236.84µs |  |  | 236.84µs | 236.84µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 805.74µs |  |  | 805.74µs | 805.74µs | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.598ms |  |  | 1.598ms | 1.598ms | 1 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 26.406ms |  |  | 26.406ms | 26.406ms | 1 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 322.08µs |  |  | 322.08µs | 322.08µs | 1 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.708ms |  |  | 2.708ms | 2.708ms | 1 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.382ms |  |  | 1.382ms | 1.382ms | 1 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 516.59µs |  |  | 516.59µs | 516.59µs | 1 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 4.267ms |  |  | 4.267ms | 4.267ms | 1 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 2.173ms |  |  | 2.173ms | 2.173ms | 1 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 333.14µs |  |  | 333.14µs | 333.14µs | 1 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 25.736ms |  |  | 25.736ms | 25.736ms | 1 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 793.101ms |  |  | 793.101ms | 793.101ms | 1 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 448.11µs |  |  | 448.11µs | 448.11µs | 1 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 3.446ms |  |  | 3.446ms | 3.446ms | 1 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.770ms |  |  | 1.770ms | 1.770ms | 1 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.850ms |  |  | 3.850ms | 3.850ms | 1 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.840ms |  |  | 3.840ms | 3.840ms | 1 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.788ms |  |  | 3.788ms | 3.788ms | 1 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.603ms |  |  | 4.603ms | 4.603ms | 1 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.201ms |  |  | 2.201ms | 2.201ms | 1 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.281ms |  |  | 3.281ms | 3.281ms | 1 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.276ms |  |  | 3.276ms | 3.276ms | 1 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 296.51µs |  |  | 296.51µs | 296.51µs | 1 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 116.33µs |  |  | 116.33µs | 116.33µs | 1 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.768ms |  |  | 1.768ms | 1.768ms | 1 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.958ms |  |  | 1.958ms | 1.958ms | 1 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.125ms |  |  | 2.125ms | 2.125ms | 1 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 83.30µs |  |  | 83.30µs | 83.30µs | 1 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.521ms |  |  | 1.521ms | 1.521ms | 1 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 73.49µs |  |  | 73.49µs | 73.49µs | 1 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.462ms |  |  | 1.462ms | 1.462ms | 1 |

informational; points come from different runners of the same class, so read trends, not single deltas.
