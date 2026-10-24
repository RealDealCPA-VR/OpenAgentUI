## aui-perf nightly record

_17 points · 2026-10-08T04:44:32.688Z to 2026-10-24T04:38:48.789Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.083ms | +0.5% |  | 654.26µs | 1.463ms | 17 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.239ms | +0.3% |  | 730.41µs | 1.578ms | 17 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 61.72µs | -1.2% |  | 33.67µs | 79.09µs | 17 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 655.55µs | -0.2% |  | 381.94µs | 846.98µs | 17 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.141ms | +0.2% |  | 5.726ms | 13.053ms | 17 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 305.52µs | -1.4% |  | 160.69µs | 385.26µs | 17 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.562ms | +0.6% |  | 1.453ms | 3.281ms | 17 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.060ms | -0.2% |  | 5.703ms | 13.004ms | 17 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.13µs | +0.8% |  | 6.19µs | 15.14µs | 17 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 89.27µs | +0.7% |  | 50.11µs | 126.55µs | 17 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 353.10µs | +0.8% |  | 193.82µs | 499.01µs | 17 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.82µs | -0.1% |  | 46.51µs | 76.13µs | 17 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 733.44µs | +1.6% |  | 402.17µs | 753.20µs | 17 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.18µs | +0.2% |  | 5.82µs | 11.01µs | 17 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 87.72µs | +2.4% |  | 47.09µs | 90.23µs | 17 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 794.04µs | +1.9% |  | 403.21µs | 1.273ms | 17 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.107ms | +1.4% |  | 3.484ms | 10.272ms | 17 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.432ms | +3.3% |  | 14.032ms | 41.163ms | 17 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 418.19µs | +1.5% |  | 248.74µs | 737.93µs | 17 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.682ms | +2.5% |  | 2.204ms | 6.315ms | 17 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.693ms | -0.5% |  | 8.865ms | 24.876ms | 17 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.75µs | -1.2% |  | 29.58µs | 58.39µs | 17 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 598.20µs | -1.4% |  | 323.51µs | 611.05µs | 17 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.295ms | -0.9% |  | 1.738ms | 3.397ms | 17 |
| external-message-conversion › core: external message tool results › 100 matches | 84.28µs | +0.7% |  | 41.28µs | 86.47µs | 17 |
| external-message-conversion › core: external message tool results › 1000 matches | 857.30µs | +1.2% |  | 416.72µs | 876.68µs | 17 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.617ms | +0.4% |  | 2.272ms | 4.731ms | 17 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 53.15µs | +2.6% |  | 24.40µs | 53.15µs | 17 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 510.27µs | +2.5% |  | 236.13µs | 510.27µs | 17 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.814ms | +2.4% |  | 1.358ms | 2.814ms | 17 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | +1.5% |  | 0.13µs | 0.27µs | 17 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs | +3.1% |  | 0.24µs | 0.52µs | 17 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.49µs | +0.6% |  | 1.49µs | 2.53µs | 17 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.75µs | +0.5% |  | 0.42µs | 0.84µs | 17 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.68µs | +4.3% |  | 2.10µs | 4.82µs | 17 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 44.01µs | +5.1% |  | 18.98µs | 45.51µs | 17 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 159.15µs | -0.6% |  | 91.13µs | 166.26µs | 17 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.092ms | +2.2% |  | 635.33µs | 1.145ms | 17 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.762ms | -1.2% |  | 1.321ms | 2.874ms | 17 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.049ms | -1.6% |  | 1.520ms | 3.158ms | 17 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.565ms | -2.0% |  | 9.092ms | 18.024ms | 17 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.945ms | -0.8% |  | 10.423ms | 19.495ms | 17 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.743ms | +0.2% |  | 878.78µs | 1.786ms | 17 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.210ms | +0.7% |  | 1.427ms | 3.255ms | 17 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.616ms | +2.8% |  | 5.246ms | 9.793ms | 17 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.145ms | -1.0% |  | 1.124ms | 1.678ms | 17 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.785ms | +0.2% |  | 1.229ms | 1.826ms | 17 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.679ms | +1.1% |  | 2.555ms | 4.760ms | 17 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 270.15µs | +0.3% |  | 163.93µs | 305.15µs | 17 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.165ms | -0.9% |  | 1.458ms | 2.495ms | 17 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 326.639ms | -4.8% |  | 169.554ms | 354.777ms | 17 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.810ms | +0.1% |  | 7.613ms | 12.037ms | 17 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.27µs | +1.8% |  | 1.24µs | 4.55µs | 17 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 8.79µs | -2.7% |  | 6.08µs | 21.65µs | 17 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 34.31µs | -2.0% |  | 18.90µs | 90.02µs | 17 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.87µs | -0.1% |  | 3.21µs | 6.01µs | 17 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.99µs | +2.3% |  | 12.17µs | 26.88µs | 17 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.89µs | -0.1% |  | 29.99µs | 60.24µs | 17 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 631.57µs | -1.6% |  | 435.95µs | 689.42µs | 17 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 8.210ms | +6.3% |  | 3.482ms | 8.233ms | 17 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.616ms | +0.3% |  | 18.667ms | 45.681ms | 17 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 386.042ms | -1.3% |  | 256.386ms | 430.807ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 745.41µs | -0.6% |  | 269.12µs | 784.19µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 987.10µs | -0.3% |  | 447.81µs | 1.249ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.474ms | +9.5% |  | 2.276ms | 5.579ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 653.19µs | +1.0% |  | 266.49µs | 754.69µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.096ms | +0.4% |  | 987.37µs | 2.602ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 33.753ms | +38.1% |  | 14.171ms | 41.901ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 680.39µs | -3.3% |  | 257.90µs | 762.51µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.695ms | -2.1% |  | 812.75µs | 2.048ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 25.867ms | +68.7% |  | 9.325ms | 33.660ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 361.57µs | +4.6% |  | 120.14µs | 366.94µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 558.23µs | +1.5% |  | 236.65µs | 624.09µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.098ms | -8.4% |  | 1.684ms | 4.209ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.69µs | +1.9% |  | 9.23µs | 24.13µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 37.81µs | +2.9% |  | 18.80µs | 38.42µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 248.27µs | +6.2% |  | 128.33µs | 248.27µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 682.81µs | -2.8% |  | 286.94µs | 805.74µs | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.482ms | +2.5% |  | 679.64µs | 1.598ms | 17 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 20.150ms | +40.1% |  | 7.649ms | 27.010ms | 17 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 263.28µs | +1.3% |  | 147.29µs | 322.08µs | 17 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.260ms | +0.2% |  | 1.350ms | 2.708ms | 17 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.152ms | +0.4% |  | 662.96µs | 1.382ms | 17 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 309.61µs | +1.3% |  | 178.73µs | 520.95µs | 17 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.601ms | -0.1% |  | 1.576ms | 4.267ms | 17 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.315ms | -0.6% |  | 795.51µs | 2.173ms | 17 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 334.25µs | -6.3% |  | 173.91µs | 356.68µs | 17 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.282ms | -1.1% |  | 14.131ms | 27.242ms | 17 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 648.703ms | -3.1% |  | 369.530ms | 1171.337ms | 17 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 260.62µs | +2.5% |  | 140.00µs | 470.51µs | 17 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.958ms | +0.8% |  | 1.179ms | 3.593ms | 17 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.032ms | +1.0% |  | 602.33µs | 1.837ms | 17 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.393ms | -3.8% |  | 1.855ms | 4.272ms | 17 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.388ms | -5.8% |  | 1.784ms | 4.121ms | 17 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.292ms | -5.7% |  | 1.764ms | 4.046ms | 17 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.613ms | -3.2% |  | 2.020ms | 4.909ms | 17 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.048ms | -1.9% |  | 1.060ms | 2.201ms | 17 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.170ms | -3.2% |  | 1.665ms | 3.319ms | 17 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.149ms | -2.6% |  | 1.683ms | 3.276ms | 17 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 241.46µs | +3.3% |  | 148.91µs | 296.51µs | 17 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 138.54µs | -0.4% |  | 77.61µs | 141.34µs | 17 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.691ms | +2.1% |  | 856.60µs | 1.768ms | 17 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.842ms | -1.4% |  | 892.90µs | 1.958ms | 17 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.042ms | -1.1% |  | 924.99µs | 2.125ms | 17 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 76.30µs | -0.9% |  | 42.65µs | 83.30µs | 17 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.505ms | +1.0% |  | 755.99µs | 1.543ms | 17 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 64.28µs | -1.6% |  | 36.82µs | 73.49µs | 17 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.464ms | -1.0% |  | 741.79µs | 1.499ms | 17 |

informational; points come from different runners of the same class, so read trends, not single deltas.
