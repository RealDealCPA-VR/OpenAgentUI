## aui-perf nightly record

_4 points · 2026-10-08T04:44:32.688Z to 2026-10-11T04:42:52.654Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.21.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 836.75µs |  |  | 805.99µs | 1.463ms | 4 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 909.29µs |  |  | 882.08µs | 1.578ms | 4 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 46.31µs |  |  | 42.77µs | 79.09µs | 4 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 485.86µs |  |  | 475.86µs | 846.98µs | 4 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 7.562ms |  |  | 7.231ms | 13.053ms | 4 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 215.01µs |  |  | 203.83µs | 385.26µs | 4 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.842ms |  |  | 1.789ms | 3.281ms | 4 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 7.477ms |  |  | 7.255ms | 13.004ms | 4 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.64µs |  |  | 8.14µs | 15.14µs | 4 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 67.82µs |  |  | 64.63µs | 126.55µs | 4 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 261.21µs |  |  | 248.73µs | 499.01µs | 4 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 46.62µs |  |  | 46.62µs | 76.13µs | 4 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 426.69µs |  |  | 402.17µs | 753.20µs | 4 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 6.15µs |  |  | 5.82µs | 11.01µs | 4 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 51.18µs |  |  | 47.09µs | 90.22µs | 4 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 713.02µs |  |  | 671.37µs | 1.266ms | 4 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.212ms |  |  | 5.909ms | 10.270ms | 4 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.826ms |  |  | 23.321ms | 41.163ms | 4 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 436.80µs |  |  | 410.29µs | 737.93µs | 4 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 4.065ms |  |  | 3.662ms | 6.315ms | 4 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 16.383ms |  |  | 14.386ms | 24.876ms | 4 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 31.50µs |  |  | 29.58µs | 58.39µs | 4 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 337.16µs |  |  | 323.51µs | 611.05µs | 4 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.813ms |  |  | 1.738ms | 3.397ms | 4 |
| external-message-conversion › core: external message tool results › 100 matches | 44.27µs |  |  | 41.28µs | 83.37µs | 4 |
| external-message-conversion › core: external message tool results › 1000 matches | 439.29µs |  |  | 428.30µs | 853.92µs | 4 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.464ms |  |  | 2.272ms | 4.731ms | 4 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 26.30µs |  |  | 24.49µs | 51.93µs | 4 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 251.29µs |  |  | 239.48µs | 500.56µs | 4 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.434ms |  |  | 1.386ms | 2.769ms | 4 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs |  |  | 0.13µs | 0.27µs | 4 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.25µs |  |  | 0.24µs | 0.52µs | 4 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.53µs |  |  | 1.49µs | 2.53µs | 4 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.45µs |  |  | 0.42µs | 0.84µs | 4 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.22µs |  |  | 2.15µs | 4.65µs | 4 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.98µs |  |  | 19.38µs | 43.52µs | 4 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 97.69µs |  |  | 91.13µs | 159.00µs | 4 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 681.49µs |  |  | 635.33µs | 1.023ms | 4 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.410ms |  |  | 1.321ms | 2.814ms | 4 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.541ms |  |  | 1.520ms | 3.090ms | 4 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.638ms |  |  | 9.092ms | 17.638ms | 4 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.779ms |  |  | 10.670ms | 19.495ms | 4 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 966.62µs |  |  | 878.78µs | 1.784ms | 4 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.577ms |  |  | 1.427ms | 3.195ms | 4 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.516ms |  |  | 5.476ms | 9.793ms | 4 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.506ms |  |  | 1.124ms | 1.678ms | 4 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.374ms |  |  | 1.374ms | 1.709ms | 4 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.604ms |  |  | 3.386ms | 4.611ms | 4 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 179.92µs |  |  | 163.93µs | 305.15µs | 4 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.594ms |  |  | 1.458ms | 2.495ms | 4 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 178.157ms |  |  | 169.554ms | 354.777ms | 4 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.964ms |  |  | 7.876ms | 12.037ms | 4 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.31µs |  |  | 1.24µs | 4.55µs | 4 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.34µs |  |  | 6.08µs | 21.65µs | 4 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 21.03µs |  |  | 19.95µs | 90.02µs | 4 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.34µs |  |  | 3.21µs | 6.01µs | 4 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.62µs |  |  | 12.17µs | 26.88µs | 4 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.88µs |  |  | 29.99µs | 60.24µs | 4 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 453.96µs |  |  | 435.95µs | 634.74µs | 4 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.976ms |  |  | 3.482ms | 7.626ms | 4 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 21.161ms |  |  | 18.667ms | 42.722ms | 4 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 289.363ms |  |  | 256.386ms | 385.027ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 303.98µs |  |  | 303.98µs | 784.19µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 469.90µs |  |  | 447.81µs | 1.131ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.482ms |  |  | 2.332ms | 5.579ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 291.90µs |  |  | 283.00µs | 679.97µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.159ms |  |  | 1.097ms | 2.602ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 34.583ms |  |  | 24.593ms | 38.535ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 294.14µs |  |  | 272.49µs | 758.11µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 890.21µs |  |  | 812.75µs | 2.048ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 26.737ms |  |  | 15.656ms | 32.325ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 127.96µs |  |  | 122.74µs | 355.22µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 247.77µs |  |  | 236.65µs | 624.09µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.712ms |  |  | 1.684ms | 4.209ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.68µs |  |  | 9.23µs | 23.58µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 20.02µs |  |  | 18.80µs | 37.94µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 133.74µs |  |  | 132.08µs | 236.84µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 332.59µs |  |  | 300.59µs | 805.74µs | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 789.63µs |  |  | 679.64µs | 1.598ms | 4 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 22.142ms |  |  | 13.163ms | 26.406ms | 4 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 181.78µs |  |  | 175.15µs | 322.08µs | 4 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.596ms |  |  | 1.548ms | 2.708ms | 4 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 817.13µs |  |  | 787.37µs | 1.382ms | 4 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 295.62µs |  |  | 289.80µs | 520.95µs | 4 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.608ms |  |  | 2.421ms | 4.267ms | 4 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.331ms |  |  | 1.245ms | 2.173ms | 4 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 183.21µs |  |  | 176.27µs | 348.09µs | 4 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.993ms |  |  | 14.272ms | 26.331ms | 4 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 406.714ms |  |  | 369.530ms | 793.101ms | 4 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 266.47µs |  |  | 255.87µs | 463.23µs | 4 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.173ms |  |  | 2.033ms | 3.530ms | 4 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.114ms |  |  | 1.077ms | 1.823ms | 4 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.876ms |  |  | 1.855ms | 3.850ms | 4 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.881ms |  |  | 1.784ms | 3.840ms | 4 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.875ms |  |  | 1.764ms | 3.788ms | 4 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.176ms |  |  | 2.020ms | 4.680ms | 4 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.100ms |  |  | 1.060ms | 2.201ms | 4 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.733ms |  |  | 1.665ms | 3.281ms | 4 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.691ms |  |  | 1.691ms | 3.276ms | 4 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 158.73µs |  |  | 148.91µs | 296.51µs | 4 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 79.44µs |  |  | 77.61µs | 141.27µs | 4 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 909.65µs |  |  | 856.60µs | 1.768ms | 4 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 927.29µs |  |  | 892.90µs | 1.958ms | 4 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.045ms |  |  | 924.99µs | 2.125ms | 4 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 46.64µs |  |  | 42.65µs | 83.30µs | 4 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 798.82µs |  |  | 768.48µs | 1.521ms | 4 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 39.78µs |  |  | 36.82µs | 73.49µs | 4 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 741.79µs |  |  | 741.79µs | 1.462ms | 4 |

informational; points come from different runners of the same class, so read trends, not single deltas.
