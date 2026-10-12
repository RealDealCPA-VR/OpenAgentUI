## aui-perf nightly record

_5 points · 2026-10-08T04:44:32.688Z to 2026-10-12T04:51:55.687Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 852.20µs |  |  | 805.99µs | 1.463ms | 5 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 934.82µs |  |  | 882.08µs | 1.578ms | 5 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 45.03µs |  |  | 42.77µs | 79.09µs | 5 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 476.63µs |  |  | 475.86µs | 846.98µs | 5 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 7.367ms |  |  | 7.231ms | 13.053ms | 5 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 211.22µs |  |  | 203.83µs | 385.26µs | 5 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.835ms |  |  | 1.789ms | 3.281ms | 5 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 7.327ms |  |  | 7.255ms | 13.004ms | 5 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.65µs |  |  | 8.14µs | 15.14µs | 5 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 67.76µs |  |  | 64.63µs | 126.55µs | 5 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 262.41µs |  |  | 248.73µs | 499.01µs | 5 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 52.27µs |  |  | 46.62µs | 76.13µs | 5 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 422.32µs |  |  | 402.17µs | 753.20µs | 5 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.97µs |  |  | 5.82µs | 11.01µs | 5 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 49.01µs |  |  | 47.09µs | 90.22µs | 5 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 698.55µs |  |  | 671.37µs | 1.266ms | 5 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.053ms |  |  | 5.909ms | 10.270ms | 5 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.118ms |  |  | 23.321ms | 41.163ms | 5 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 420.06µs |  |  | 410.29µs | 737.93µs | 5 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.863ms |  |  | 3.662ms | 6.315ms | 5 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 15.450ms |  |  | 14.386ms | 24.876ms | 5 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 30.61µs |  |  | 29.58µs | 58.39µs | 5 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 334.72µs |  |  | 323.51µs | 611.05µs | 5 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.842ms |  |  | 1.738ms | 3.397ms | 5 |
| external-message-conversion › core: external message tool results › 100 matches | 42.98µs |  |  | 41.28µs | 83.37µs | 5 |
| external-message-conversion › core: external message tool results › 1000 matches | 437.70µs |  |  | 428.30µs | 853.92µs | 5 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.386ms |  |  | 2.272ms | 4.731ms | 5 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 26.05µs |  |  | 24.49µs | 51.93µs | 5 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 247.79µs |  |  | 239.48µs | 500.56µs | 5 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.428ms |  |  | 1.386ms | 2.769ms | 5 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs |  |  | 0.13µs | 0.27µs | 5 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.24µs |  |  | 0.24µs | 0.52µs | 5 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.50µs |  |  | 1.49µs | 2.53µs | 5 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.43µs |  |  | 0.42µs | 0.84µs | 5 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.10µs |  |  | 2.10µs | 4.65µs | 5 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 18.98µs |  |  | 18.98µs | 43.52µs | 5 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 96.54µs |  |  | 91.13µs | 159.00µs | 5 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 686.01µs |  |  | 635.33µs | 1.023ms | 5 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.427ms |  |  | 1.321ms | 2.814ms | 5 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.580ms |  |  | 1.520ms | 3.090ms | 5 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.762ms |  |  | 9.092ms | 17.638ms | 5 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 11.136ms |  |  | 10.670ms | 19.495ms | 5 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 951.08µs |  |  | 878.78µs | 1.784ms | 5 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.522ms |  |  | 1.427ms | 3.195ms | 5 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.965ms |  |  | 5.476ms | 9.793ms | 5 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.306ms |  |  | 1.124ms | 1.678ms | 5 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.299ms |  |  | 1.299ms | 1.709ms | 5 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.725ms |  |  | 3.386ms | 4.611ms | 5 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 176.84µs |  |  | 163.93µs | 305.15µs | 5 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.663ms |  |  | 1.458ms | 2.495ms | 5 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 174.776ms |  |  | 169.554ms | 354.777ms | 5 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 8.001ms |  |  | 7.876ms | 12.037ms | 5 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.32µs |  |  | 1.24µs | 4.55µs | 5 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.20µs |  |  | 6.08µs | 21.65µs | 5 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 20.45µs |  |  | 19.95µs | 90.02µs | 5 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.27µs |  |  | 3.21µs | 6.01µs | 5 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.08µs |  |  | 12.17µs | 26.88µs | 5 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.29µs |  |  | 29.99µs | 60.24µs | 5 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 441.50µs |  |  | 435.95µs | 634.74µs | 5 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 4.466ms |  |  | 3.482ms | 7.626ms | 5 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 20.825ms |  |  | 18.667ms | 42.722ms | 5 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 265.750ms |  |  | 256.386ms | 385.027ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 326.01µs |  |  | 303.98µs | 784.19µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 485.79µs |  |  | 447.81µs | 1.131ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.394ms |  |  | 2.332ms | 5.579ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 275.32µs |  |  | 275.32µs | 679.97µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 987.37µs |  |  | 987.37µs | 2.602ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 35.967ms |  |  | 24.593ms | 38.535ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 275.55µs |  |  | 272.49µs | 758.11µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 844.26µs |  |  | 812.75µs | 2.048ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 27.058ms |  |  | 15.656ms | 32.325ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 120.14µs |  |  | 120.14µs | 355.22µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 270.35µs |  |  | 236.65µs | 624.09µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.951ms |  |  | 1.684ms | 4.209ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.70µs |  |  | 9.23µs | 23.58µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 19.45µs |  |  | 18.80µs | 37.94µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 133.75µs |  |  | 132.08µs | 236.84µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 340.70µs |  |  | 300.59µs | 805.74µs | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 715.85µs |  |  | 679.64µs | 1.598ms | 5 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 16.990ms |  |  | 13.163ms | 26.406ms | 5 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 176.60µs |  |  | 175.15µs | 322.08µs | 5 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.559ms |  |  | 1.548ms | 2.708ms | 5 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 791.48µs |  |  | 787.37µs | 1.382ms | 5 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 295.10µs |  |  | 289.80µs | 520.95µs | 5 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.533ms |  |  | 2.421ms | 4.267ms | 5 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.308ms |  |  | 1.245ms | 2.173ms | 5 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 181.53µs |  |  | 176.27µs | 348.09µs | 5 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.614ms |  |  | 14.272ms | 26.331ms | 5 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 389.333ms |  |  | 369.530ms | 793.101ms | 5 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 268.75µs |  |  | 255.87µs | 463.23µs | 5 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.089ms |  |  | 2.033ms | 3.530ms | 5 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.078ms |  |  | 1.077ms | 1.823ms | 5 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.855ms |  |  | 1.855ms | 3.850ms | 5 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.856ms |  |  | 1.784ms | 3.840ms | 5 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.825ms |  |  | 1.764ms | 3.788ms | 5 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.157ms |  |  | 2.020ms | 4.680ms | 5 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.103ms |  |  | 1.060ms | 2.201ms | 5 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.759ms |  |  | 1.665ms | 3.281ms | 5 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.779ms |  |  | 1.691ms | 3.276ms | 5 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 150.77µs |  |  | 148.91µs | 296.51µs | 5 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 79.69µs |  |  | 77.61µs | 141.27µs | 5 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 890.37µs |  |  | 856.60µs | 1.768ms | 5 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 927.36µs |  |  | 892.90µs | 1.958ms | 5 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 983.76µs |  |  | 924.99µs | 2.125ms | 5 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 44.87µs |  |  | 42.65µs | 83.30µs | 5 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 759.91µs |  |  | 759.91µs | 1.521ms | 5 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 38.65µs |  |  | 36.82µs | 73.49µs | 5 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 746.68µs |  |  | 741.79µs | 1.462ms | 5 |

informational; points come from different runners of the same class, so read trends, not single deltas.
