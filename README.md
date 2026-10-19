## aui-perf nightly record

_12 points · 2026-10-08T04:44:32.688Z to 2026-10-19T04:43:19.072Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.086ms | +29.8% |  | 654.26µs | 1.463ms | 12 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.254ms | +37.9% |  | 737.35µs | 1.578ms | 12 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 61.79µs | +33.4% |  | 35.42µs | 79.09µs | 12 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 653.97µs | +34.6% |  | 399.78µs | 846.98µs | 12 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.062ms | +33.1% |  | 6.046ms | 13.053ms | 12 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 305.16µs | +41.9% |  | 166.31µs | 385.26µs | 12 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.549ms | +38.4% |  | 1.514ms | 3.281ms | 12 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 9.945ms | +33.0% |  | 5.927ms | 13.004ms | 12 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.27µs | +18.9% |  | 6.19µs | 15.14µs | 12 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.82µs | +31.0% |  | 50.20µs | 126.55µs | 12 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 350.74µs | +34.3% |  | 194.96µs | 499.01µs | 12 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.98µs | +58.7% |  | 46.51µs | 76.13µs | 12 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 730.24µs | +71.1% |  | 402.17µs | 753.20µs | 12 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 9.97µs | +62.2% |  | 5.82µs | 11.01µs | 12 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 86.21µs | +68.5% |  | 47.09µs | 90.22µs | 12 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 776.09µs | +8.8% |  | 403.21µs | 1.273ms | 12 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.087ms | -2.0% |  | 3.590ms | 10.272ms | 12 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 23.802ms | -4.1% |  | 14.130ms | 41.163ms | 12 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 421.54µs | -3.5% |  | 253.59µs | 737.93µs | 12 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.714ms | -8.6% |  | 2.269ms | 6.315ms | 12 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.497ms | -11.5% |  | 8.865ms | 24.876ms | 12 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.57µs | +79.6% |  | 29.58µs | 58.39µs | 12 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 598.60µs | +77.5% |  | 323.51µs | 611.05µs | 12 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.292ms | +81.5% |  | 1.738ms | 3.397ms | 12 |
| external-message-conversion › core: external message tool results › 100 matches | 85.22µs | +92.5% |  | 41.28µs | 85.22µs | 12 |
| external-message-conversion › core: external message tool results › 1000 matches | 856.27µs | +94.9% |  | 416.72µs | 865.87µs | 12 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.597ms | +86.5% |  | 2.272ms | 4.731ms | 12 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.69µs | +100.3% |  | 24.40µs | 53.09µs | 12 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 508.00µs | +102.2% |  | 236.13µs | 508.00µs | 12 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.716ms | +89.4% |  | 1.358ms | 2.775ms | 12 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | +75.8% |  | 0.13µs | 0.27µs | 12 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | +74.3% |  | 0.24µs | 0.52µs | 12 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.48µs | +61.8% |  | 1.49µs | 2.53µs | 12 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +66.3% |  | 0.42µs | 0.84µs | 12 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.59µs | +106.5% |  | 2.10µs | 4.65µs | 12 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.23µs | +111.4% |  | 18.98µs | 43.52µs | 12 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 166.26µs | +70.2% |  | 91.13µs | 166.26µs | 12 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.145ms | +68.0% |  | 635.33µs | 1.145ms | 12 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.787ms | +97.7% |  | 1.321ms | 2.814ms | 12 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.090ms | +100.4% |  | 1.520ms | 3.100ms | 12 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.860ms | +85.3% |  | 9.092ms | 17.924ms | 12 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.212ms | +78.2% |  | 10.670ms | 19.495ms | 12 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.696ms | +75.5% |  | 878.78µs | 1.784ms | 12 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.255ms | +106.4% |  | 1.427ms | 3.255ms | 12 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.607ms | +74.2% |  | 5.246ms | 9.793ms | 12 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.148ms | -23.8% |  | 1.124ms | 1.678ms | 12 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.772ms | +29.0% |  | 1.290ms | 1.799ms | 12 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.465ms | +23.9% |  | 3.339ms | 4.760ms | 12 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 279.35µs | +55.3% |  | 163.93µs | 305.15µs | 12 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.245ms | +40.8% |  | 1.458ms | 2.495ms | 12 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 318.717ms | +78.9% |  | 169.554ms | 354.777ms | 12 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.787ms | +35.4% |  | 7.699ms | 12.037ms | 12 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.28µs | +73.7% |  | 1.24µs | 4.55µs | 12 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.34µs | +47.2% |  | 6.08µs | 21.65µs | 12 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 38.46µs | +82.9% |  | 19.39µs | 90.02µs | 12 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.91µs | +46.9% |  | 3.21µs | 6.01µs | 12 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 19.08µs | +40.1% |  | 12.17µs | 26.88µs | 12 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.96µs | +47.3% |  | 29.99µs | 60.24µs | 12 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 643.25µs | +41.7% |  | 435.95µs | 643.25µs | 12 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.945ms | +99.8% |  | 3.482ms | 7.945ms | 12 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 41.796ms | +97.5% |  | 18.667ms | 42.722ms | 12 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 405.811ms | +40.2% |  | 256.386ms | 405.811ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 772.71µs | +154.2% |  | 269.12µs | 784.19µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.082ms | +130.4% |  | 447.81µs | 1.131ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.555ms | +83.5% |  | 2.276ms | 5.579ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 713.53µs | +144.4% |  | 266.49µs | 713.53µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.042ms | +76.2% |  | 987.37µs | 2.602ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 37.027ms | +7.1% |  | 18.282ms | 41.901ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 634.47µs | +115.7% |  | 257.90µs | 762.51µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.659ms | +86.4% |  | 812.75µs | 2.048ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 24.157ms | -9.6% |  | 13.459ms | 33.660ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 342.54µs | +167.7% |  | 120.14µs | 359.26µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 566.52µs | +128.6% |  | 236.65µs | 624.09µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.761ms | +119.8% |  | 1.684ms | 4.209ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.13µs | +149.2% |  | 9.23µs | 24.13µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 38.23µs | +90.9% |  | 18.80µs | 38.23µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 233.95µs | +74.9% |  | 132.08µs | 238.00µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 680.28µs | +104.5% |  | 286.94µs | 805.74µs | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.484ms | +87.9% |  | 679.64µs | 1.598ms | 12 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 21.661ms | -2.2% |  | 13.163ms | 27.010ms | 12 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 261.84µs | +44.0% |  | 148.13µs | 322.08µs | 12 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.255ms | +41.3% |  | 1.360ms | 2.708ms | 12 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.160ms | +42.0% |  | 678.79µs | 1.382ms | 12 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 306.53µs | +3.7% |  | 178.73µs | 520.95µs | 12 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.605ms | -0.1% |  | 1.582ms | 4.267ms | 12 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.336ms | +0.4% |  | 795.51µs | 2.173ms | 12 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 334.83µs | +82.8% |  | 174.66µs | 356.68µs | 12 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.219ms | +74.9% |  | 14.272ms | 26.729ms | 12 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 662.612ms | +62.9% |  | 369.530ms | 793.101ms | 12 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 260.24µs | -2.3% |  | 140.00µs | 470.51µs | 12 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.951ms | -10.2% |  | 1.183ms | 3.593ms | 12 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.036ms | -7.0% |  | 611.24µs | 1.837ms | 12 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.466ms | +84.7% |  | 1.855ms | 4.272ms | 12 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.444ms | +83.1% |  | 1.784ms | 4.121ms | 12 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.459ms | +84.4% |  | 1.764ms | 4.046ms | 12 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.768ms | +119.2% |  | 2.020ms | 4.879ms | 12 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.053ms | +86.6% |  | 1.060ms | 2.201ms | 12 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.228ms | +86.3% |  | 1.665ms | 3.281ms | 12 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.211ms | +89.9% |  | 1.691ms | 3.276ms | 12 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 236.34µs | +48.9% |  | 148.91µs | 296.51µs | 12 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 141.24µs | +77.8% |  | 77.61µs | 141.27µs | 12 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.695ms | +86.4% |  | 856.60µs | 1.768ms | 12 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.897ms | +104.6% |  | 892.90µs | 1.958ms | 12 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.116ms | +102.5% |  | 924.99µs | 2.125ms | 12 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 78.92µs | +69.2% |  | 42.65µs | 83.30µs | 12 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.524ms | +90.8% |  | 755.99µs | 1.543ms | 12 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 66.28µs | +66.6% |  | 36.82µs | 73.49µs | 12 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.499ms | +102.1% |  | 741.79µs | 1.499ms | 12 |

informational; points come from different runners of the same class, so read trends, not single deltas.
