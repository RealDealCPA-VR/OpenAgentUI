## aui-perf nightly record

_13 points · 2026-10-08T04:44:32.688Z to 2026-10-20T04:38:45.642Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 666.16µs | -21.8% |  | 654.26µs | 1.463ms | 13 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 730.41µs | -21.9% |  | 730.41µs | 1.578ms | 13 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 33.67µs | -25.2% |  | 33.67µs | 79.09µs | 13 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 381.94µs | -19.9% |  | 381.94µs | 846.98µs | 13 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 5.726ms | -22.3% |  | 5.726ms | 13.053ms | 13 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 160.69µs | -23.9% |  | 160.69µs | 385.26µs | 13 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.453ms | -20.8% |  | 1.453ms | 3.281ms | 13 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.703ms | -22.2% |  | 5.703ms | 13.004ms | 13 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 6.37µs | -26.4% |  | 6.19µs | 15.14µs | 13 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 50.11µs | -26.0% |  | 50.11µs | 126.55µs | 13 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 193.82µs | -26.1% |  | 193.82µs | 499.01µs | 13 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 47.32µs | -9.5% |  | 46.51µs | 76.13µs | 13 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 420.21µs | -0.5% |  | 402.17µs | 753.20µs | 13 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 6.06µs | +1.5% |  | 5.82µs | 11.01µs | 13 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 49.84µs | +1.7% |  | 47.09µs | 90.22µs | 13 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 407.26µs | -41.7% |  | 403.21µs | 1.273ms | 13 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.484ms | -42.4% |  | 3.484ms | 10.272ms | 13 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 14.032ms | -41.8% |  | 14.032ms | 41.163ms | 13 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 248.74µs | -40.8% |  | 248.74µs | 737.93µs | 13 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.204ms | -43.0% |  | 2.204ms | 6.315ms | 13 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 9.098ms | -41.1% |  | 8.865ms | 24.876ms | 13 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 30.67µs | +0.2% |  | 29.58µs | 58.39µs | 13 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 324.27µs | -3.1% |  | 323.51µs | 611.05µs | 13 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.808ms | -1.8% |  | 1.738ms | 3.397ms | 13 |
| external-message-conversion › core: external message tool results › 100 matches | 41.50µs | -3.4% |  | 41.28µs | 85.22µs | 13 |
| external-message-conversion › core: external message tool results › 1000 matches | 420.73µs | -3.9% |  | 416.72µs | 865.87µs | 13 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.308ms | -3.3% |  | 2.272ms | 4.731ms | 13 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 25.78µs | -1.0% |  | 24.40µs | 53.09µs | 13 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 242.38µs | -2.2% |  | 236.13µs | 508.00µs | 13 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.363ms | -4.5% |  | 1.358ms | 2.775ms | 13 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs | +2.0% |  | 0.13µs | 0.27µs | 13 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.25µs | +0.9% |  | 0.24µs | 0.52µs | 13 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.54µs | +2.6% |  | 1.49µs | 2.53µs | 13 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.43µs | +0.4% |  | 0.42µs | 0.84µs | 13 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.19µs | +4.3% |  | 2.10µs | 4.65µs | 13 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.88µs | +4.7% |  | 18.98µs | 43.52µs | 13 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 93.72µs | -2.9% |  | 91.13µs | 166.26µs | 13 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 639.06µs | -6.8% |  | 635.33µs | 1.145ms | 13 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.340ms | -6.0% |  | 1.321ms | 2.814ms | 13 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.546ms | -2.1% |  | 1.520ms | 3.100ms | 13 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.369ms | -4.0% |  | 9.092ms | 17.924ms | 13 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.423ms | -6.4% |  | 10.423ms | 19.495ms | 13 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 892.95µs | -6.1% |  | 878.78µs | 1.784ms | 13 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.451ms | -4.7% |  | 1.427ms | 3.255ms | 13 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.457ms | -8.5% |  | 5.246ms | 9.793ms | 13 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.188ms | -9.0% |  | 1.124ms | 1.678ms | 13 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.229ms | -5.4% |  | 1.229ms | 1.799ms | 13 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 2.681ms | -28.0% |  | 2.681ms | 4.760ms | 13 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 184.47µs | +4.3% |  | 163.93µs | 305.15µs | 13 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.569ms | -5.6% |  | 1.458ms | 2.495ms | 13 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 184.561ms | +5.6% |  | 169.554ms | 354.777ms | 13 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.613ms | -4.8% |  | 7.613ms | 12.037ms | 13 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.37µs | +3.7% |  | 1.24µs | 4.55µs | 13 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.47µs | +4.4% |  | 6.08µs | 21.65µs | 13 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 19.62µs | -4.1% |  | 19.39µs | 90.02µs | 13 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.31µs | +1.2% |  | 3.21µs | 6.01µs | 13 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.02µs | -0.4% |  | 12.17µs | 26.88µs | 13 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.31µs | +0.0% |  | 29.99µs | 60.24µs | 13 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 446.13µs | +1.0% |  | 435.95µs | 643.25µs | 13 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.755ms | -15.9% |  | 3.482ms | 7.945ms | 13 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 19.268ms | -7.5% |  | 18.667ms | 42.722ms | 13 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 265.143ms | -0.2% |  | 256.386ms | 405.811ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 293.35µs | -10.0% |  | 269.12µs | 784.19µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 485.80µs | +0.0% |  | 447.81µs | 1.131ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.666ms | +11.4% |  | 2.276ms | 5.579ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 273.53µs | -0.7% |  | 266.49µs | 713.53µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.034ms | +4.7% |  | 987.37µs | 2.602ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 14.171ms | -60.6% |  | 14.171ms | 41.901ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 287.93µs | +4.5% |  | 257.90µs | 762.51µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 885.82µs | +4.9% |  | 812.75µs | 2.048ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 9.325ms | -65.5% |  | 9.325ms | 33.660ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 121.99µs | +1.5% |  | 120.14µs | 359.26µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 255.20µs | -5.6% |  | 236.65µs | 624.09µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.957ms | +0.3% |  | 1.684ms | 4.209ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.60µs | -1.1% |  | 9.23µs | 24.13µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 19.91µs | +2.4% |  | 18.80µs | 38.23µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 128.33µs | -4.1% |  | 128.33µs | 238.00µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 303.87µs | -10.8% |  | 286.94µs | 805.74µs | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 703.82µs | -1.7% |  | 679.64µs | 1.598ms | 13 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 7.649ms | -55.0% |  | 7.649ms | 27.010ms | 13 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 147.29µs | -16.6% |  | 147.29µs | 322.08µs | 13 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.350ms | -13.4% |  | 1.350ms | 2.708ms | 13 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 662.96µs | -16.2% |  | 662.96µs | 1.382ms | 13 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 180.39µs | -38.9% |  | 178.73µs | 520.95µs | 13 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.576ms | -37.8% |  | 1.576ms | 4.267ms | 13 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 805.35µs | -38.4% |  | 795.51µs | 2.173ms | 13 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 173.91µs | -4.2% |  | 173.91µs | 356.68µs | 13 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.131ms | -3.3% |  | 14.131ms | 26.729ms | 13 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 386.634ms | -0.7% |  | 369.530ms | 793.101ms | 13 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 147.21µs | -45.2% |  | 140.00µs | 470.51µs | 13 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.179ms | -43.6% |  | 1.179ms | 3.593ms | 13 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 602.33µs | -44.1% |  | 602.33µs | 1.837ms | 13 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.066ms | +11.4% |  | 1.855ms | 4.272ms | 13 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.056ms | +10.8% |  | 1.784ms | 4.121ms | 13 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.015ms | +10.4% |  | 1.764ms | 4.046ms | 13 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.097ms | -2.7% |  | 2.020ms | 4.879ms | 13 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.108ms | +0.5% |  | 1.060ms | 2.201ms | 13 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.676ms | -4.7% |  | 1.665ms | 3.281ms | 13 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.701ms | -4.4% |  | 1.691ms | 3.276ms | 13 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 156.25µs | +3.6% |  | 148.91µs | 296.51µs | 13 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 77.98µs | -2.2% |  | 77.61µs | 141.27µs | 13 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 902.74µs | +1.4% |  | 856.60µs | 1.768ms | 13 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 938.71µs | +1.2% |  | 892.90µs | 1.958ms | 13 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 987.54µs | +0.4% |  | 924.99µs | 2.125ms | 13 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 45.24µs | +0.8% |  | 42.65µs | 83.30µs | 13 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 766.88µs | +0.9% |  | 755.99µs | 1.543ms | 13 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 38.43µs | -0.6% |  | 36.82µs | 73.49µs | 13 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 743.36µs | -0.4% |  | 741.79µs | 1.499ms | 13 |

informational; points come from different runners of the same class, so read trends, not single deltas.
