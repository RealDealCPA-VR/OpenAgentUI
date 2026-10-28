## aui-perf nightly record

_21 points · 2026-10-08T04:44:32.688Z to 2026-10-28T04:32:45.269Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 635.00µs | -4.7% |  | 635.00µs | 1.463ms | 21 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 715.47µs | -2.0% |  | 715.47µs | 1.578ms | 21 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 32.96µs | -2.1% |  | 32.96µs | 79.09µs | 21 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 368.54µs | -3.5% |  | 368.54µs | 846.98µs | 21 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 5.785ms | +1.0% |  | 5.726ms | 13.053ms | 21 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 157.97µs | -1.7% |  | 157.97µs | 385.26µs | 21 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.430ms | -1.6% |  | 1.430ms | 3.281ms | 21 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.591ms | -2.0% |  | 5.591ms | 13.004ms | 21 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 5.95µs | -6.6% |  | 5.95µs | 15.14µs | 21 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 47.79µs | -4.6% |  | 47.79µs | 126.55µs | 21 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 183.90µs | -5.1% |  | 183.90µs | 499.01µs | 21 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 47.53µs | +0.5% |  | 46.47µs | 76.13µs | 21 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 410.67µs | -2.3% |  | 402.17µs | 753.20µs | 21 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.96µs | -1.7% |  | 5.82µs | 11.01µs | 21 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 49.75µs | -0.2% |  | 47.09µs | 90.23µs | 21 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 399.28µs | -2.0% |  | 395.44µs | 1.273ms | 21 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.524ms | +1.2% |  | 3.484ms | 10.272ms | 21 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 13.638ms | -2.8% |  | 13.638ms | 41.163ms | 21 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 257.30µs | +3.4% |  | 241.09µs | 737.93µs | 21 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.107ms | -4.4% |  | 2.067ms | 6.315ms | 21 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 8.420ms | -7.5% |  | 8.420ms | 24.876ms | 21 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 31.01µs | +1.1% |  | 29.58µs | 58.39µs | 21 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 340.54µs | +5.0% |  | 323.51µs | 611.05µs | 21 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.755ms | -3.0% |  | 1.738ms | 3.397ms | 21 |
| external-message-conversion › core: external message tool results › 100 matches | 42.77µs | +3.1% |  | 41.28µs | 86.47µs | 21 |
| external-message-conversion › core: external message tool results › 1000 matches | 430.48µs | +2.3% |  | 416.72µs | 876.68µs | 21 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.329ms | +0.9% |  | 2.272ms | 4.731ms | 21 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 25.84µs | +0.2% |  | 24.40µs | 53.15µs | 21 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 243.29µs | +0.4% |  | 236.13µs | 510.27µs | 21 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.412ms | +3.5% |  | 1.358ms | 2.814ms | 21 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs | -1.2% |  | 0.13µs | 0.27µs | 21 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.24µs | -4.0% |  | 0.24µs | 0.52µs | 21 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.42µs | -7.6% |  | 1.42µs | 2.53µs | 21 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.43µs | -1.1% |  | 0.42µs | 0.84µs | 21 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.34µs | +6.8% |  | 2.10µs | 4.82µs | 21 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 21.12µs | +6.3% |  | 18.98µs | 45.51µs | 21 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 94.23µs | +0.5% |  | 91.13µs | 168.10µs | 21 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 668.89µs | +4.7% |  | 635.33µs | 1.145ms | 21 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.287ms | -4.0% |  | 1.287ms | 2.874ms | 21 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.539ms | -0.5% |  | 1.520ms | 3.158ms | 21 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.496ms | +1.3% |  | 9.092ms | 18.024ms | 21 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.687ms | +2.5% |  | 10.423ms | 19.495ms | 21 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 859.62µs | -3.7% |  | 859.62µs | 1.786ms | 21 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.363ms | -6.1% |  | 1.363ms | 3.255ms | 21 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.234ms | -4.1% |  | 5.234ms | 9.793ms | 21 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.169ms | -1.6% |  | 1.124ms | 1.678ms | 21 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.251ms | +1.8% |  | 1.229ms | 2.017ms | 21 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 2.493ms | -7.0% |  | 2.493ms | 5.159ms | 21 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 169.29µs | -8.2% |  | 163.93µs | 305.15µs | 21 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.490ms | -5.0% |  | 1.458ms | 2.495ms | 21 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 168.933ms | -8.5% |  | 168.933ms | 354.777ms | 21 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.436ms | -2.3% |  | 7.436ms | 12.037ms | 21 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.28µs | -6.1% |  | 1.24µs | 4.55µs | 21 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.24µs | -3.4% |  | 6.08µs | 21.65µs | 21 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 18.36µs | -6.4% |  | 18.36µs | 90.02µs | 21 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.23µs | -2.5% |  | 3.21µs | 6.18µs | 21 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.10µs | +0.6% |  | 12.17µs | 26.88µs | 21 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 29.96µs | -4.3% |  | 29.96µs | 60.24µs | 21 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 471.83µs | +5.8% |  | 435.95µs | 689.42µs | 21 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.996ms | +6.4% |  | 3.482ms | 8.233ms | 21 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 18.839ms | -2.2% |  | 18.667ms | 45.681ms | 21 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 251.909ms | -5.0% |  | 251.909ms | 430.807ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 276.36µs | -5.8% |  | 269.12µs | 784.19µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 512.73µs | +5.5% |  | 447.81µs | 1.249ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.161ms | -18.9% |  | 2.161ms | 5.579ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 257.58µs | -5.8% |  | 257.58µs | 754.69µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.015ms | -1.8% |  | 987.37µs | 2.602ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 13.190ms | -6.9% |  | 13.190ms | 41.901ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 283.33µs | -1.6% |  | 257.90µs | 762.51µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 776.93µs | -12.3% |  | 776.93µs | 2.048ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 10.170ms | +9.1% |  | 9.325ms | 33.660ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 131.68µs | +7.9% |  | 120.14µs | 366.94µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 241.47µs | -5.4% |  | 236.65µs | 624.09µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.582ms | -19.2% |  | 1.582ms | 4.209ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 8.35µs | -13.0% |  | 8.35µs | 24.72µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 18.59µs | -6.6% |  | 18.59µs | 38.42µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 127.01µs | -1.0% |  | 127.01µs | 248.27µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 341.54µs | +12.4% |  | 286.94µs | 807.82µs | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 705.29µs | +0.2% |  | 679.64µs | 1.684ms | 21 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 8.857ms | +15.8% |  | 7.649ms | 27.010ms | 21 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 143.95µs | -2.3% |  | 143.95µs | 322.08µs | 21 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.264ms | -6.4% |  | 1.264ms | 2.708ms | 21 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 676.47µs | +2.0% |  | 653.73µs | 1.382ms | 21 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 176.39µs | -2.2% |  | 176.39µs | 520.95µs | 21 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.571ms | -0.3% |  | 1.571ms | 4.267ms | 21 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 797.67µs | -1.0% |  | 795.51µs | 2.173ms | 21 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 166.48µs | -4.3% |  | 166.48µs | 356.68µs | 21 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.386ms | +1.8% |  | 14.131ms | 27.242ms | 21 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 379.452ms | -1.9% |  | 369.530ms | 1171.337ms | 21 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 144.82µs | -1.6% |  | 140.00µs | 470.51µs | 21 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.188ms | +0.8% |  | 1.179ms | 3.593ms | 21 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 604.24µs | +0.3% |  | 602.33µs | 1.837ms | 21 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.873ms | -9.4% |  | 1.848ms | 4.588ms | 21 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.910ms | -7.1% |  | 1.784ms | 4.331ms | 21 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.851ms | -8.2% |  | 1.764ms | 4.046ms | 21 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.168ms | +3.4% |  | 2.020ms | 4.909ms | 21 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.115ms | +0.6% |  | 1.060ms | 2.201ms | 21 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.726ms | +3.0% |  | 1.665ms | 3.319ms | 21 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.768ms | +3.9% |  | 1.683ms | 3.276ms | 21 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 164.40µs | +5.2% |  | 148.91µs | 296.51µs | 21 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 81.09µs | +4.0% |  | 77.61µs | 141.34µs | 21 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 898.41µs | -0.5% |  | 856.60µs | 1.768ms | 21 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 934.00µs | -0.5% |  | 892.90µs | 1.958ms | 21 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.002ms | +1.4% |  | 924.99µs | 2.133ms | 21 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 44.19µs | -2.3% |  | 42.65µs | 83.30µs | 21 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 768.97µs | +0.3% |  | 755.99µs | 1.581ms | 21 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 38.76µs | +0.9% |  | 36.82µs | 73.49µs | 21 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 750.42µs | +0.9% |  | 741.79µs | 1.546ms | 21 |

informational; points come from different runners of the same class, so read trends, not single deltas.
