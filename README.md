## aui-perf nightly record

_3 points · 2026-10-08T04:44:32.688Z to 2026-10-10T04:43:14.678Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.463ms |  |  | 805.99µs | 1.463ms | 3 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.578ms |  |  | 882.08µs | 1.578ms | 3 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 79.09µs |  |  | 42.77µs | 79.09µs | 3 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 815.65µs |  |  | 475.86µs | 846.98µs | 3 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 12.632ms |  |  | 7.231ms | 13.053ms | 3 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 385.26µs |  |  | 203.83µs | 385.26µs | 3 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 3.156ms |  |  | 1.789ms | 3.281ms | 3 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 12.362ms |  |  | 7.255ms | 13.004ms | 3 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 14.96µs |  |  | 8.14µs | 15.14µs | 3 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 126.55µs |  |  | 64.63µs | 126.55µs | 3 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 499.01µs |  |  | 248.73µs | 499.01µs | 3 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 71.50µs |  |  | 47.83µs | 76.13µs | 3 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 705.86µs |  |  | 402.17µs | 753.20µs | 3 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.34µs |  |  | 5.82µs | 11.01µs | 3 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 85.03µs |  |  | 47.09µs | 90.22µs | 3 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 1.266ms |  |  | 671.37µs | 1.266ms | 3 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 10.270ms |  |  | 5.909ms | 10.270ms | 3 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 41.163ms |  |  | 23.321ms | 41.163ms | 3 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 737.93µs |  |  | 410.29µs | 737.93µs | 3 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 6.315ms |  |  | 3.662ms | 6.315ms | 3 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 24.876ms |  |  | 14.386ms | 24.876ms | 3 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 55.36µs |  |  | 29.58µs | 58.39µs | 3 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 584.27µs |  |  | 323.51µs | 611.05µs | 3 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.193ms |  |  | 1.738ms | 3.397ms | 3 |
| external-message-conversion › core: external message tool results › 100 matches | 83.37µs |  |  | 41.28µs | 83.37µs | 3 |
| external-message-conversion › core: external message tool results › 1000 matches | 853.92µs |  |  | 428.30µs | 853.92µs | 3 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.610ms |  |  | 2.272ms | 4.731ms | 3 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 51.93µs |  |  | 24.49µs | 51.93µs | 3 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 500.56µs |  |  | 239.48µs | 500.56µs | 3 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.717ms |  |  | 1.386ms | 2.769ms | 3 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs |  |  | 0.13µs | 0.27µs | 3 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs |  |  | 0.24µs | 0.52µs | 3 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.45µs |  |  | 1.49µs | 2.53µs | 3 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.75µs |  |  | 0.42µs | 0.84µs | 3 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.65µs |  |  | 2.15µs | 4.65µs | 3 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 43.52µs |  |  | 19.38µs | 43.52µs | 3 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 152.00µs |  |  | 91.13µs | 159.00µs | 3 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.023ms |  |  | 635.33µs | 1.023ms | 3 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.814ms |  |  | 1.321ms | 2.814ms | 3 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.090ms |  |  | 1.520ms | 3.090ms | 3 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.638ms |  |  | 9.092ms | 17.638ms | 3 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.495ms |  |  | 10.670ms | 19.495ms | 3 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.707ms |  |  | 878.78µs | 1.784ms | 3 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.140ms |  |  | 1.427ms | 3.195ms | 3 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.195ms |  |  | 5.476ms | 9.793ms | 3 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.124ms |  |  | 1.124ms | 1.678ms | 3 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.709ms |  |  | 1.399ms | 1.709ms | 3 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.611ms |  |  | 3.386ms | 4.611ms | 3 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 274.85µs |  |  | 163.93µs | 305.15µs | 3 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.188ms |  |  | 1.458ms | 2.495ms | 3 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 339.830ms |  |  | 169.554ms | 354.777ms | 3 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.531ms |  |  | 7.876ms | 12.037ms | 3 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.27µs |  |  | 1.24µs | 4.55µs | 3 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 8.71µs |  |  | 6.08µs | 21.65µs | 3 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 33.84µs |  |  | 19.95µs | 90.02µs | 3 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.89µs |  |  | 3.21µs | 6.01µs | 3 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.76µs |  |  | 12.17µs | 26.88µs | 3 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.95µs |  |  | 29.99µs | 60.24µs | 3 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 634.74µs |  |  | 435.95µs | 634.74µs | 3 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.626ms |  |  | 3.482ms | 7.626ms | 3 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.722ms |  |  | 18.667ms | 42.722ms | 3 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 385.027ms |  |  | 256.386ms | 385.027ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 708.44µs |  |  | 304.25µs | 784.19µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.028ms |  |  | 447.81µs | 1.131ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.299ms |  |  | 2.332ms | 5.579ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 631.70µs |  |  | 283.00µs | 679.97µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.105ms |  |  | 1.097ms | 2.602ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 24.593ms |  |  | 24.593ms | 38.535ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 699.48µs |  |  | 272.49µs | 758.11µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.729ms |  |  | 812.75µs | 2.048ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 17.929ms |  |  | 15.656ms | 32.325ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 353.20µs |  |  | 122.74µs | 355.22µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 545.05µs |  |  | 236.65µs | 624.09µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.849ms |  |  | 1.684ms | 4.209ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.58µs |  |  | 9.23µs | 23.58µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 37.94µs |  |  | 18.80µs | 37.94µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 234.09µs |  |  | 132.08µs | 236.84µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 669.64µs |  |  | 300.59µs | 805.74µs | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.370ms |  |  | 679.64µs | 1.598ms | 3 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 15.283ms |  |  | 13.163ms | 26.406ms | 3 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 316.46µs |  |  | 175.15µs | 322.08µs | 3 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.670ms |  |  | 1.548ms | 2.708ms | 3 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.367ms |  |  | 787.37µs | 1.382ms | 3 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 520.95µs |  |  | 289.80µs | 520.95µs | 3 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 4.169ms |  |  | 2.421ms | 4.267ms | 3 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 2.145ms |  |  | 1.245ms | 2.173ms | 3 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 348.09µs |  |  | 176.27µs | 348.09µs | 3 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.331ms |  |  | 14.272ms | 26.331ms | 3 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 673.205ms |  |  | 369.530ms | 793.101ms | 3 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 463.23µs |  |  | 255.87µs | 463.23µs | 3 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 3.530ms |  |  | 2.033ms | 3.530ms | 3 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.823ms |  |  | 1.077ms | 1.823ms | 3 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.397ms |  |  | 1.855ms | 3.850ms | 3 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.394ms |  |  | 1.784ms | 3.840ms | 3 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.284ms |  |  | 1.764ms | 3.788ms | 3 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.680ms |  |  | 2.020ms | 4.680ms | 3 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.034ms |  |  | 1.060ms | 2.201ms | 3 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.166ms |  |  | 1.665ms | 3.281ms | 3 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.158ms |  |  | 1.767ms | 3.276ms | 3 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 231.85µs |  |  | 148.91µs | 296.51µs | 3 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 141.27µs |  |  | 77.61µs | 141.27µs | 3 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.690ms |  |  | 856.60µs | 1.768ms | 3 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.829ms |  |  | 892.90µs | 1.958ms | 3 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.996ms |  |  | 924.99µs | 2.125ms | 3 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 76.56µs |  |  | 42.65µs | 83.30µs | 3 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.474ms |  |  | 768.48µs | 1.521ms | 3 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 64.40µs |  |  | 36.82µs | 73.49µs | 3 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.451ms |  |  | 778.87µs | 1.462ms | 3 |

informational; points come from different runners of the same class, so read trends, not single deltas.
