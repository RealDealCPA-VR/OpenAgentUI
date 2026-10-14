## aui-perf nightly record

_7 points · 2026-10-08T04:44:32.688Z to 2026-10-14T04:42:42.269Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.433ms |  |  | 805.99µs | 1.463ms | 7 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.550ms |  |  | 882.08µs | 1.578ms | 7 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 78.94µs |  |  | 42.77µs | 79.09µs | 7 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 810.15µs |  |  | 475.17µs | 846.98µs | 7 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 12.531ms |  |  | 7.231ms | 13.053ms | 7 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 383.99µs |  |  | 203.83µs | 385.26µs | 7 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 3.159ms |  |  | 1.789ms | 3.281ms | 7 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 12.362ms |  |  | 7.255ms | 13.004ms | 7 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 14.54µs |  |  | 8.14µs | 15.14µs | 7 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 122.92µs |  |  | 64.63µs | 126.55µs | 7 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 485.35µs |  |  | 248.73µs | 499.01µs | 7 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 72.53µs |  |  | 46.62µs | 76.13µs | 7 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 707.09µs |  |  | 402.17µs | 753.20µs | 7 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.18µs |  |  | 5.82µs | 11.01µs | 7 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 83.23µs |  |  | 47.09µs | 90.22µs | 7 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 1.273ms |  |  | 671.37µs | 1.273ms | 7 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 10.272ms |  |  | 5.909ms | 10.272ms | 7 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 40.641ms |  |  | 23.321ms | 41.163ms | 7 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 717.50µs |  |  | 410.29µs | 737.93µs | 7 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 6.156ms |  |  | 3.662ms | 6.315ms | 7 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 24.634ms |  |  | 14.386ms | 24.876ms | 7 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 55.95µs |  |  | 29.58µs | 58.39µs | 7 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 586.28µs |  |  | 323.51µs | 611.05µs | 7 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.229ms |  |  | 1.738ms | 3.397ms | 7 |
| external-message-conversion › core: external message tool results › 100 matches | 83.83µs |  |  | 41.28µs | 83.83µs | 7 |
| external-message-conversion › core: external message tool results › 1000 matches | 849.96µs |  |  | 428.30µs | 853.92µs | 7 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.592ms |  |  | 2.272ms | 4.731ms | 7 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 53.09µs |  |  | 24.49µs | 53.09µs | 7 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 507.44µs |  |  | 239.48µs | 507.44µs | 7 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.775ms |  |  | 1.386ms | 2.775ms | 7 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs |  |  | 0.13µs | 0.27µs | 7 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs |  |  | 0.24µs | 0.52µs | 7 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.48µs |  |  | 1.49µs | 2.53µs | 7 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.75µs |  |  | 0.42µs | 0.84µs | 7 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.60µs |  |  | 2.10µs | 4.65µs | 7 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.97µs |  |  | 18.98µs | 43.52µs | 7 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 159.76µs |  |  | 91.13µs | 159.76µs | 7 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.049ms |  |  | 635.33µs | 1.049ms | 7 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.733ms |  |  | 1.321ms | 2.814ms | 7 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.081ms |  |  | 1.520ms | 3.090ms | 7 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.607ms |  |  | 9.092ms | 17.638ms | 7 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.911ms |  |  | 10.670ms | 19.495ms | 7 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.754ms |  |  | 878.78µs | 1.784ms | 7 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.107ms |  |  | 1.427ms | 3.195ms | 7 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.421ms |  |  | 5.476ms | 9.793ms | 7 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.153ms |  |  | 1.124ms | 1.678ms | 7 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.720ms |  |  | 1.290ms | 1.720ms | 7 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.760ms |  |  | 3.359ms | 4.760ms | 7 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 274.92µs |  |  | 163.93µs | 305.15µs | 7 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.199ms |  |  | 1.458ms | 2.495ms | 7 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 313.218ms |  |  | 169.554ms | 354.777ms | 7 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.872ms |  |  | 7.876ms | 12.037ms | 7 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.27µs |  |  | 1.24µs | 4.55µs | 7 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.00µs |  |  | 6.08µs | 21.65µs | 7 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 37.62µs |  |  | 19.39µs | 90.02µs | 7 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.89µs |  |  | 3.21µs | 6.01µs | 7 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.52µs |  |  | 12.17µs | 26.88µs | 7 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.86µs |  |  | 29.99µs | 60.24µs | 7 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 629.12µs |  |  | 435.95µs | 634.74µs | 7 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.585ms |  |  | 3.482ms | 7.626ms | 7 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.050ms |  |  | 18.667ms | 42.722ms | 7 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 393.630ms |  |  | 256.386ms | 393.630ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 730.20µs |  |  | 269.12µs | 784.19µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.036ms |  |  | 447.81µs | 1.131ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.172ms |  |  | 2.332ms | 5.579ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 626.21µs |  |  | 275.32µs | 679.97µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.335ms |  |  | 987.37µs | 2.602ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 25.810ms |  |  | 18.282ms | 38.535ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 726.47µs |  |  | 257.90µs | 758.11µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.743ms |  |  | 812.75µs | 2.048ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 20.211ms |  |  | 15.656ms | 32.325ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 359.26µs |  |  | 120.14µs | 359.26µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 558.74µs |  |  | 236.65µs | 624.09µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.135ms |  |  | 1.684ms | 4.209ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.58µs |  |  | 9.23µs | 23.58µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 37.60µs |  |  | 18.80µs | 37.94µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 238.00µs |  |  | 132.08µs | 238.00µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 794.30µs |  |  | 286.94µs | 805.74µs | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.443ms |  |  | 679.64µs | 1.598ms | 7 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 15.665ms |  |  | 13.163ms | 26.406ms | 7 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 312.26µs |  |  | 175.15µs | 322.08µs | 7 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.642ms |  |  | 1.548ms | 2.708ms | 7 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.347ms |  |  | 787.37µs | 1.382ms | 7 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 517.74µs |  |  | 289.80µs | 520.95µs | 7 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 4.225ms |  |  | 2.421ms | 4.267ms | 7 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 2.160ms |  |  | 1.245ms | 2.173ms | 7 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 346.84µs |  |  | 176.27µs | 348.09µs | 7 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.729ms |  |  | 14.272ms | 26.729ms | 7 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 722.451ms |  |  | 369.530ms | 793.101ms | 7 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 470.51µs |  |  | 251.33µs | 470.51µs | 7 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 3.593ms |  |  | 2.033ms | 3.593ms | 7 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.837ms |  |  | 1.077ms | 1.837ms | 7 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 4.272ms |  |  | 1.855ms | 4.272ms | 7 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 4.121ms |  |  | 1.784ms | 4.121ms | 7 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 4.046ms |  |  | 1.764ms | 4.046ms | 7 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.878ms |  |  | 2.020ms | 4.878ms | 7 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.050ms |  |  | 1.060ms | 2.201ms | 7 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.229ms |  |  | 1.665ms | 3.281ms | 7 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.258ms |  |  | 1.691ms | 3.276ms | 7 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 231.29µs |  |  | 148.91µs | 296.51µs | 7 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 139.58µs |  |  | 77.61µs | 141.27µs | 7 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.675ms |  |  | 856.60µs | 1.768ms | 7 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.831ms |  |  | 892.90µs | 1.958ms | 7 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.046ms |  |  | 924.99µs | 2.125ms | 7 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 78.30µs |  |  | 42.65µs | 83.30µs | 7 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.543ms |  |  | 759.91µs | 1.543ms | 7 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 65.84µs |  |  | 36.82µs | 73.49µs | 7 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.498ms |  |  | 741.79µs | 1.498ms | 7 |

informational; points come from different runners of the same class, so read trends, not single deltas.
