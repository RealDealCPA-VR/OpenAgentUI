## aui-perf nightly record

_14 points · 2026-10-08T04:44:32.688Z to 2026-10-21T04:39:50.025Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 701.20µs | -15.7% |  | 654.26µs | 1.463ms | 14 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 771.78µs | -16.4% |  | 730.41µs | 1.578ms | 14 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 35.82µs | -18.5% |  | 33.67µs | 79.09µs | 14 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 396.55µs | -16.5% |  | 381.94µs | 846.98µs | 14 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 6.164ms | -18.2% |  | 5.726ms | 13.053ms | 14 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 172.39µs | -18.7% |  | 160.69µs | 385.26µs | 14 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.556ms | -17.8% |  | 1.453ms | 3.281ms | 14 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 6.147ms | -18.4% |  | 5.703ms | 13.004ms | 14 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 6.51µs | -24.2% |  | 6.19µs | 15.14µs | 14 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 51.01µs | -24.4% |  | 50.11µs | 126.55µs | 14 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 201.36µs | -23.8% |  | 193.82µs | 499.01µs | 14 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 46.58µs | -1.8% |  | 46.51µs | 76.13µs | 14 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 423.97µs | -1.0% |  | 402.17µs | 753.20µs | 14 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 6.08µs | +0.4% |  | 5.82µs | 11.01µs | 14 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 50.51µs | +5.7% |  | 47.09µs | 90.22µs | 14 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 403.76µs | -41.9% |  | 403.21µs | 1.273ms | 14 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.532ms | -40.4% |  | 3.484ms | 10.272ms | 14 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 14.177ms | -43.4% |  | 14.032ms | 41.163ms | 14 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 256.12µs | -40.9% |  | 248.74µs | 737.93µs | 14 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.238ms | -41.8% |  | 2.204ms | 6.315ms | 14 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 8.968ms | -43.2% |  | 8.865ms | 24.876ms | 14 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 31.15µs | -1.2% |  | 29.58µs | 58.39µs | 14 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 336.43µs | -1.5% |  | 323.51µs | 611.05µs | 14 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.845ms | -0.2% |  | 1.738ms | 3.397ms | 14 |
| external-message-conversion › core: external message tool results › 100 matches | 43.06µs | -1.2% |  | 41.28µs | 85.22µs | 14 |
| external-message-conversion › core: external message tool results › 1000 matches | 433.68µs | -1.0% |  | 416.72µs | 865.87µs | 14 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.383ms | -1.0% |  | 2.272ms | 4.731ms | 14 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 27.12µs | +6.9% |  | 24.40µs | 53.09µs | 14 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 260.05µs | +6.1% |  | 236.13µs | 508.00µs | 14 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.462ms | +4.9% |  | 1.358ms | 2.775ms | 14 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs | +0.5% |  | 0.13µs | 0.27µs | 14 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.25µs | +0.7% |  | 0.24µs | 0.52µs | 14 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.54µs | +1.1% |  | 1.49µs | 2.53µs | 14 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.46µs | -0.6% |  | 0.42µs | 0.84µs | 14 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.22µs | -0.3% |  | 2.10µs | 4.65µs | 14 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.43µs | +0.0% |  | 18.98µs | 43.52µs | 14 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 97.64µs | -0.0% |  | 91.13µs | 166.26µs | 14 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 692.15µs | +1.4% |  | 635.33µs | 1.145ms | 14 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.389ms | +4.5% |  | 1.321ms | 2.814ms | 14 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.596ms | +1.5% |  | 1.520ms | 3.100ms | 14 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.726ms | +1.6% |  | 9.092ms | 17.924ms | 14 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 11.007ms | +3.1% |  | 10.423ms | 19.495ms | 14 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 951.70µs | +4.3% |  | 878.78µs | 1.784ms | 14 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.475ms | +0.1% |  | 1.427ms | 3.255ms | 14 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.475ms | -5.1% |  | 5.246ms | 9.793ms | 14 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.198ms | -2.5% |  | 1.124ms | 1.678ms | 14 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.313ms | +1.8% |  | 1.229ms | 1.799ms | 14 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 2.555ms | -23.9% |  | 2.555ms | 4.760ms | 14 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 177.02µs | -2.6% |  | 163.93µs | 305.15µs | 14 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.639ms | +2.2% |  | 1.458ms | 2.495ms | 14 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 183.147ms | +0.2% |  | 169.554ms | 354.777ms | 14 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.716ms | -3.0% |  | 7.613ms | 12.037ms | 14 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.35µs | +2.1% |  | 1.24µs | 4.55µs | 14 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.21µs | -5.4% |  | 6.08µs | 21.65µs | 14 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 18.90µs | -2.5% |  | 18.90µs | 90.02µs | 14 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.45µs | +3.0% |  | 3.21µs | 6.01µs | 14 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 12.93µs | -1.6% |  | 12.17µs | 26.88µs | 14 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.37µs | -0.4% |  | 29.99µs | 60.24µs | 14 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 477.65µs | +7.6% |  | 435.95µs | 643.25µs | 14 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.788ms | -9.3% |  | 3.482ms | 7.945ms | 14 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 18.956ms | -11.5% |  | 18.667ms | 42.722ms | 14 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 282.198ms | -2.3% |  | 256.386ms | 405.811ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 288.94µs | +7.4% |  | 269.12µs | 784.19µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 522.22µs | +5.2% |  | 447.81µs | 1.131ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.529ms | -3.9% |  | 2.276ms | 5.579ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 292.35µs | -8.4% |  | 266.49µs | 713.53µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.181ms | +11.4% |  | 987.37µs | 2.602ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 36.542ms | +99.9% |  | 14.171ms | 41.901ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 295.05µs | +14.4% |  | 257.90µs | 762.51µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 844.64µs | -2.2% |  | 812.75µs | 2.048ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 14.197ms | -52.0% |  | 9.325ms | 33.660ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 126.28µs | -6.6% |  | 120.14µs | 359.26µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 272.56µs | +12.3% |  | 236.65µs | 624.09µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.299ms | +25.7% |  | 1.684ms | 4.209ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 10.23µs | +8.5% |  | 9.23µs | 24.13µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 20.88µs | +7.9% |  | 18.80µs | 38.23µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 133.66µs | +0.1% |  | 128.33µs | 238.00µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 293.85µs | +2.4% |  | 286.94µs | 805.74µs | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 763.36µs | +10.3% |  | 679.64µs | 1.598ms | 14 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 12.902ms | -31.2% |  | 7.649ms | 27.010ms | 14 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 151.66µs | -15.3% |  | 147.29µs | 322.08µs | 14 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.378ms | -11.7% |  | 1.350ms | 2.708ms | 14 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 690.00µs | -13.7% |  | 662.96µs | 1.382ms | 14 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 187.44µs | -36.3% |  | 178.73µs | 520.95µs | 14 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.642ms | -34.4% |  | 1.576ms | 4.267ms | 14 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 833.79µs | -35.3% |  | 795.51µs | 2.173ms | 14 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 179.52µs | +1.6% |  | 173.91µs | 356.68µs | 14 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.969ms | +0.6% |  | 14.131ms | 26.729ms | 14 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 400.189ms | +0.6% |  | 369.530ms | 793.101ms | 14 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 151.87µs | -39.6% |  | 140.00µs | 470.51µs | 14 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.220ms | -41.1% |  | 1.179ms | 3.593ms | 14 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 626.32µs | -44.4% |  | 602.33µs | 1.837ms | 14 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.019ms | +6.3% |  | 1.855ms | 4.272ms | 14 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.983ms | +7.1% |  | 1.784ms | 4.121ms | 14 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.934ms | +5.3% |  | 1.764ms | 4.046ms | 14 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.133ms | -1.6% |  | 2.020ms | 4.879ms | 14 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.103ms | -2.0% |  | 1.060ms | 2.201ms | 14 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.756ms | +1.4% |  | 1.665ms | 3.281ms | 14 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.683ms | -2.2% |  | 1.683ms | 3.276ms | 14 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 157.91µs | +2.0% |  | 148.91µs | 296.51µs | 14 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 80.20µs | +0.3% |  | 77.61µs | 141.27µs | 14 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 879.99µs | -3.5% |  | 856.60µs | 1.768ms | 14 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 925.73µs | -1.5% |  | 892.90µs | 1.958ms | 14 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.003ms | -3.5% |  | 924.99µs | 2.125ms | 14 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 44.14µs | -3.8% |  | 42.65µs | 83.30µs | 14 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 758.40µs | -2.7% |  | 755.99µs | 1.543ms | 14 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 39.18µs | -1.4% |  | 36.82µs | 73.49µs | 14 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 768.19µs | +0.3% |  | 741.79µs | 1.499ms | 14 |

informational; points come from different runners of the same class, so read trends, not single deltas.
