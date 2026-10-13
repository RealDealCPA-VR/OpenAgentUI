## aui-perf nightly record

_6 points · 2026-10-08T04:44:32.688Z to 2026-10-13T04:47:34.325Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 831.32µs |  |  | 805.99µs | 1.463ms | 6 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 923.19µs |  |  | 882.08µs | 1.578ms | 6 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 43.98µs |  |  | 42.77µs | 79.09µs | 6 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 475.17µs |  |  | 475.17µs | 846.98µs | 6 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 7.534ms |  |  | 7.231ms | 13.053ms | 6 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 212.16µs |  |  | 203.83µs | 385.26µs | 6 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.892ms |  |  | 1.789ms | 3.281ms | 6 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 7.532ms |  |  | 7.255ms | 13.004ms | 6 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.58µs |  |  | 8.14µs | 15.14µs | 6 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 67.44µs |  |  | 64.63µs | 126.55µs | 6 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 264.35µs |  |  | 248.73µs | 499.01µs | 6 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 47.45µs |  |  | 46.62µs | 76.13µs | 6 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 428.32µs |  |  | 402.17µs | 753.20µs | 6 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 6.05µs |  |  | 5.82µs | 11.01µs | 6 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 47.77µs |  |  | 47.09µs | 90.22µs | 6 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 694.89µs |  |  | 671.37µs | 1.266ms | 6 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.930ms |  |  | 5.909ms | 10.270ms | 6 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 25.041ms |  |  | 23.321ms | 41.163ms | 6 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 433.03µs |  |  | 410.29µs | 737.93µs | 6 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.844ms |  |  | 3.662ms | 6.315ms | 6 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 15.795ms |  |  | 14.386ms | 24.876ms | 6 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 31.55µs |  |  | 29.58µs | 58.39µs | 6 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 341.69µs |  |  | 323.51µs | 611.05µs | 6 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.848ms |  |  | 1.738ms | 3.397ms | 6 |
| external-message-conversion › core: external message tool results › 100 matches | 43.60µs |  |  | 41.28µs | 83.37µs | 6 |
| external-message-conversion › core: external message tool results › 1000 matches | 438.26µs |  |  | 428.30µs | 853.92µs | 6 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.406ms |  |  | 2.272ms | 4.731ms | 6 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 25.37µs |  |  | 24.49µs | 51.93µs | 6 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 245.10µs |  |  | 239.48µs | 500.56µs | 6 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.394ms |  |  | 1.386ms | 2.769ms | 6 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs |  |  | 0.13µs | 0.27µs | 6 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.25µs |  |  | 0.24µs | 0.52µs | 6 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.53µs |  |  | 1.49µs | 2.53µs | 6 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.46µs |  |  | 0.42µs | 0.84µs | 6 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.22µs |  |  | 2.10µs | 4.65µs | 6 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.42µs |  |  | 18.98µs | 43.52µs | 6 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 97.66µs |  |  | 91.13µs | 159.00µs | 6 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 682.69µs |  |  | 635.33µs | 1.023ms | 6 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.330ms |  |  | 1.321ms | 2.814ms | 6 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.573ms |  |  | 1.520ms | 3.090ms | 6 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.575ms |  |  | 9.092ms | 17.638ms | 6 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.674ms |  |  | 10.670ms | 19.495ms | 6 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 912.76µs |  |  | 878.78µs | 1.784ms | 6 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.474ms |  |  | 1.427ms | 3.195ms | 6 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.767ms |  |  | 5.476ms | 9.793ms | 6 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.229ms |  |  | 1.124ms | 1.678ms | 6 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.290ms |  |  | 1.290ms | 1.709ms | 6 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.359ms |  |  | 3.359ms | 4.611ms | 6 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 181.69µs |  |  | 163.93µs | 305.15µs | 6 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.604ms |  |  | 1.458ms | 2.495ms | 6 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 182.725ms |  |  | 169.554ms | 354.777ms | 6 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.954ms |  |  | 7.876ms | 12.037ms | 6 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.32µs |  |  | 1.24µs | 4.55µs | 6 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.57µs |  |  | 6.08µs | 21.65µs | 6 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 19.39µs |  |  | 19.39µs | 90.02µs | 6 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.35µs |  |  | 3.21µs | 6.01µs | 6 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.14µs |  |  | 12.17µs | 26.88µs | 6 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.50µs |  |  | 29.99µs | 60.24µs | 6 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 443.81µs |  |  | 435.95µs | 634.74µs | 6 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 4.178ms |  |  | 3.482ms | 7.626ms | 6 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 21.415ms |  |  | 18.667ms | 42.722ms | 6 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 288.802ms |  |  | 256.386ms | 385.027ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 269.12µs |  |  | 269.12µs | 784.19µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 496.29µs |  |  | 447.81µs | 1.131ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.632ms |  |  | 2.332ms | 5.579ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 319.04µs |  |  | 275.32µs | 679.97µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.060ms |  |  | 987.37µs | 2.602ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 18.282ms |  |  | 18.282ms | 38.535ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 257.90µs |  |  | 257.90µs | 758.11µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 863.87µs |  |  | 812.75µs | 2.048ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 29.557ms |  |  | 15.656ms | 32.325ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 135.20µs |  |  | 120.14µs | 355.22µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 242.66µs |  |  | 236.65µs | 624.09µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.829ms |  |  | 1.684ms | 4.209ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.42µs |  |  | 9.23µs | 23.58µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 19.35µs |  |  | 18.80µs | 37.94µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 133.46µs |  |  | 132.08µs | 236.84µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 286.94µs |  |  | 286.94µs | 805.74µs | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 691.92µs |  |  | 679.64µs | 1.598ms | 6 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 18.753ms |  |  | 13.163ms | 26.406ms | 6 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 179.04µs |  |  | 175.15µs | 322.08µs | 6 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.560ms |  |  | 1.548ms | 2.708ms | 6 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 799.12µs |  |  | 787.37µs | 1.382ms | 6 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 294.09µs |  |  | 289.80µs | 520.95µs | 6 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.503ms |  |  | 2.421ms | 4.267ms | 6 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.289ms |  |  | 1.245ms | 2.173ms | 6 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 176.72µs |  |  | 176.27µs | 348.09µs | 6 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.882ms |  |  | 14.272ms | 26.331ms | 6 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 397.965ms |  |  | 369.530ms | 793.101ms | 6 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 251.33µs |  |  | 251.33µs | 463.23µs | 6 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.072ms |  |  | 2.033ms | 3.530ms | 6 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.126ms |  |  | 1.077ms | 1.823ms | 6 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.899ms |  |  | 1.855ms | 3.850ms | 6 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.852ms |  |  | 1.784ms | 3.840ms | 6 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.837ms |  |  | 1.764ms | 3.788ms | 6 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.168ms |  |  | 2.020ms | 4.680ms | 6 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.126ms |  |  | 1.060ms | 2.201ms | 6 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.733ms |  |  | 1.665ms | 3.281ms | 6 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.721ms |  |  | 1.691ms | 3.276ms | 6 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 154.78µs |  |  | 148.91µs | 296.51µs | 6 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 79.93µs |  |  | 77.61µs | 141.27µs | 6 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 911.60µs |  |  | 856.60µs | 1.768ms | 6 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 940.13µs |  |  | 892.90µs | 1.958ms | 6 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.040ms |  |  | 924.99µs | 2.125ms | 6 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 45.88µs |  |  | 42.65µs | 83.30µs | 6 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 779.56µs |  |  | 759.91µs | 1.521ms | 6 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 39.75µs |  |  | 36.82µs | 73.49µs | 6 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 766.24µs |  |  | 741.79µs | 1.462ms | 6 |

informational; points come from different runners of the same class, so read trends, not single deltas.
