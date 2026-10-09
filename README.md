## aui-perf nightly record

_2 points · 2026-10-08T04:44:32.688Z to 2026-10-09T04:44:12.855Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 805.99µs |  |  | 805.99µs | 1.413ms | 2 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 882.08µs |  |  | 882.08µs | 1.537ms | 2 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 42.77µs |  |  | 42.77µs | 77.77µs | 2 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 475.86µs |  |  | 475.86µs | 846.98µs | 2 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 7.231ms |  |  | 7.231ms | 13.053ms | 2 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 203.83µs |  |  | 203.83µs | 378.69µs | 2 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.789ms |  |  | 1.789ms | 3.281ms | 2 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 7.255ms |  |  | 7.255ms | 13.004ms | 2 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.14µs |  |  | 8.14µs | 15.14µs | 2 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 64.63µs |  |  | 64.63µs | 121.47µs | 2 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 248.73µs |  |  | 248.73µs | 485.68µs | 2 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 47.83µs |  |  | 47.83µs | 76.13µs | 2 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 402.17µs |  |  | 402.17µs | 753.20µs | 2 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.82µs |  |  | 5.82µs | 11.01µs | 2 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 47.09µs |  |  | 47.09µs | 90.22µs | 2 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 671.37µs |  |  | 671.37µs | 1.179ms | 2 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.909ms |  |  | 5.909ms | 9.821ms | 2 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 23.321ms |  |  | 23.321ms | 37.584ms | 2 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 410.29µs |  |  | 410.29µs | 703.86µs | 2 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.662ms |  |  | 3.662ms | 6.046ms | 2 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.386ms |  |  | 14.386ms | 24.032ms | 2 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 29.58µs |  |  | 29.58µs | 58.39µs | 2 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 323.51µs |  |  | 323.51µs | 611.05µs | 2 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.738ms |  |  | 1.738ms | 3.397ms | 2 |
| external-message-conversion › core: external message tool results › 100 matches | 41.28µs |  |  | 41.28µs | 83.17µs | 2 |
| external-message-conversion › core: external message tool results › 1000 matches | 428.30µs |  |  | 428.30µs | 852.76µs | 2 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.272ms |  |  | 2.272ms | 4.731ms | 2 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 24.49µs |  |  | 24.49µs | 51.42µs | 2 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 239.48µs |  |  | 239.48µs | 489.98µs | 2 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.386ms |  |  | 1.386ms | 2.769ms | 2 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs |  |  | 0.13µs | 0.27µs | 2 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.24µs |  |  | 0.24µs | 0.52µs | 2 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.49µs |  |  | 1.49µs | 2.53µs | 2 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.42µs |  |  | 0.42µs | 0.84µs | 2 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.15µs |  |  | 2.15µs | 4.63µs | 2 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.38µs |  |  | 19.38µs | 41.48µs | 2 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 91.13µs |  |  | 91.13µs | 159.00µs | 2 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 635.33µs |  |  | 635.33µs | 994.85µs | 2 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.321ms |  |  | 1.321ms | 2.655ms | 2 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.520ms |  |  | 1.520ms | 2.992ms | 2 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.092ms |  |  | 9.092ms | 16.557ms | 2 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.670ms |  |  | 10.670ms | 17.768ms | 2 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 878.78µs |  |  | 878.78µs | 1.784ms | 2 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.427ms |  |  | 1.427ms | 3.195ms | 2 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.476ms |  |  | 5.476ms | 9.793ms | 2 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.678ms |  |  | 1.180ms | 1.678ms | 2 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.399ms |  |  | 1.399ms | 1.709ms | 2 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.386ms |  |  | 3.386ms | 4.343ms | 2 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 163.93µs |  |  | 163.93µs | 305.15µs | 2 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.458ms |  |  | 1.458ms | 2.495ms | 2 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 169.554ms |  |  | 169.554ms | 354.777ms | 2 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.876ms |  |  | 7.876ms | 12.037ms | 2 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.24µs |  |  | 1.24µs | 4.55µs | 2 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.08µs |  |  | 6.08µs | 21.65µs | 2 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 19.95µs |  |  | 19.95µs | 90.02µs | 2 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.21µs |  |  | 3.21µs | 6.01µs | 2 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 12.17µs |  |  | 12.17µs | 26.88µs | 2 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 29.99µs |  |  | 29.99µs | 60.24µs | 2 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 435.95µs |  |  | 435.95µs | 585.75µs | 2 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.482ms |  |  | 3.482ms | 6.885ms | 2 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 18.667ms |  |  | 18.667ms | 42.124ms | 2 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 256.386ms |  |  | 256.386ms | 358.111ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 304.25µs |  |  | 304.25µs | 784.19µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 447.81µs |  |  | 447.81µs | 1.131ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.332ms |  |  | 2.332ms | 5.579ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 283.00µs |  |  | 283.00µs | 679.97µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.097ms |  |  | 1.097ms | 2.602ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 28.172ms |  |  | 28.172ms | 38.535ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 272.49µs |  |  | 272.49µs | 758.11µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 812.75µs |  |  | 812.75µs | 2.048ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 15.656ms |  |  | 15.656ms | 32.325ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 122.74µs |  |  | 122.74µs | 355.22µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 236.65µs |  |  | 236.65µs | 624.09µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.684ms |  |  | 1.684ms | 4.209ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.23µs |  |  | 9.23µs | 19.76µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 18.80µs |  |  | 18.80µs | 33.45µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 132.08µs |  |  | 132.08µs | 236.84µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 300.59µs |  |  | 300.59µs | 805.74µs | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 679.64µs |  |  | 679.64µs | 1.598ms | 2 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 13.163ms |  |  | 13.163ms | 26.406ms | 2 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 175.15µs |  |  | 175.15µs | 322.08µs | 2 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.548ms |  |  | 1.548ms | 2.708ms | 2 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 787.37µs |  |  | 787.37µs | 1.382ms | 2 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 289.80µs |  |  | 289.80µs | 516.59µs | 2 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.421ms |  |  | 2.421ms | 4.267ms | 2 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.245ms |  |  | 1.245ms | 2.173ms | 2 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 176.27µs |  |  | 176.27µs | 333.14µs | 2 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.272ms |  |  | 14.272ms | 25.736ms | 2 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 369.530ms |  |  | 369.530ms | 793.101ms | 2 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 255.87µs |  |  | 255.87µs | 448.11µs | 2 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.033ms |  |  | 2.033ms | 3.446ms | 2 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.077ms |  |  | 1.077ms | 1.770ms | 2 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.855ms |  |  | 1.855ms | 3.850ms | 2 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.784ms |  |  | 1.784ms | 3.840ms | 2 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.764ms |  |  | 1.764ms | 3.788ms | 2 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.020ms |  |  | 2.020ms | 4.603ms | 2 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.060ms |  |  | 1.060ms | 2.201ms | 2 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.665ms |  |  | 1.665ms | 3.281ms | 2 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.767ms |  |  | 1.767ms | 3.276ms | 2 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 148.91µs |  |  | 148.91µs | 296.51µs | 2 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 77.61µs |  |  | 77.61µs | 116.33µs | 2 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 856.60µs |  |  | 856.60µs | 1.768ms | 2 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 892.90µs |  |  | 892.90µs | 1.958ms | 2 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 924.99µs |  |  | 924.99µs | 2.125ms | 2 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 42.65µs |  |  | 42.65µs | 83.30µs | 2 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 768.48µs |  |  | 768.48µs | 1.521ms | 2 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 36.82µs |  |  | 36.82µs | 73.49µs | 2 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 778.87µs |  |  | 778.87µs | 1.462ms | 2 |

informational; points come from different runners of the same class, so read trends, not single deltas.
