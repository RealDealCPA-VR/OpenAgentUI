## aui-perf nightly record

_32 points · 2026-10-08T04:44:32.688Z to 2026-11-08T04:29:11.074Z · latest runner: AMD EPYC 9V74 80-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 951.39µs | -13.5% | -32.7% ⚠︎ | 635.00µs | 1.463ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.077ms | -15.0% | -29.9% ⚠︎ | 715.47µs | 1.578ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 46.47µs | -24.7% | -40.2% ⚠︎ | 32.96µs | 79.09µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 530.94µs | -19.1% | -37.3% ⚠︎ | 362.82µs | 815.65µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 8.340ms | -17.6% | -36.1% ⚠︎ | 5.720ms | 12.632ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 236.19µs | -24.0% | -37.6% ⚠︎ | 157.97µs | 385.26µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.069ms | -18.6% | -37.0% ⚠︎ | 1.391ms | 3.159ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 8.183ms | -19.1% | -37.1% ⚠︎ | 5.591ms | 12.362ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.88µs | -12.7% | -41.3% ⚠︎ | 5.92µs | 14.96µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 73.01µs | -17.8% | -39.9% ⚠︎ | 46.46µs | 126.55µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 286.29µs | -18.6% | -41.1% ⚠︎ | 183.90µs | 499.01µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 62.81µs | -15.1% | -17.5% ⚠︎ | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 596.86µs | -17.2% | -20.8% ⚠︎ | 402.17µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 7.60µs | -25.5% | -31.0% ⚠︎ | 5.54µs | 11.05µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 67.82µs | -22.5% | -24.8% ⚠︎ | 45.85µs | 90.23µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 598.75µs | -24.4% | -49.2% ⚠︎ | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.154ms | -16.2% | -47.5% ⚠︎ | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 20.471ms | -16.2% | -45.5% ⚠︎ | 13.513ms | 41.163ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 355.83µs | -12.4% | -49.4% ⚠︎ | 228.27µs | 737.93µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.119ms | -13.8% | -48.4% ⚠︎ | 2.016ms | 6.315ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 12.417ms | -15.8% | -48.3% ⚠︎ | 8.037ms | 24.876ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 44.55µs | -21.9% | -23.7% ⚠︎ | 29.58µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 466.35µs | -22.0% | -23.7% ⚠︎ | 317.99µs | 619.94µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.606ms | -21.6% | -23.3% ⚠︎ | 1.738ms | 3.392ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 64.39µs | -23.8% | -22.6% ⚠︎ | 40.51µs | 86.47µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 648.80µs | -24.6% | -23.9% ⚠︎ | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 3.563ms | -23.7% | -24.7% ⚠︎ | 2.265ms | 4.713ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 39.28µs | -26.4% | -23.6% ⚠︎ | 24.02µs | 53.39µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 366.26µs | -29.0% | -25.2% ⚠︎ | 229.02µs | 516.13µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.057ms | -26.9% | -25.7% ⚠︎ | 1.338ms | 2.844ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.18µs | -19.7% | -33.3% ⚠︎ | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.34µs | -22.1% | -34.4% ⚠︎ | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.15µs | -13.2% | -15.0% ⚠︎ | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.56µs | -23.8% | -33.3% ⚠︎ | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 3.16µs | -31.2% | -31.7% ⚠︎ | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 29.32µs | -31.5% | -29.3% ⚠︎ | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 121.05µs | -26.9% | -23.9% ⚠︎ | 91.13µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 866.01µs | -26.3% | -13.0% ⚠︎ | 635.33µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.064ms | -21.5% | -22.3% ⚠︎ | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.238ms | -23.8% | -25.2% ⚠︎ | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 14.160ms | -19.8% | -14.5% ⚠︎ | 9.092ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 15.511ms | -21.3% | -12.7% ⚠︎ | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.038ms | -30.1% | -41.8% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.146ms | -29.8% | -32.8% ⚠︎ | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 7.254ms | -24.7% | -25.9% ⚠︎ | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.280ms | +3.8% | +8.5% | 1.124ms | 1.678ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.498ms | -23.3% | -12.4% ⚠︎ | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.683ms | -11.2% | +7.8% | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 243.19µs | -11.0% | -20.3% ⚠︎ | 163.93µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.077ms | -4.5% | -16.7% ⚠︎ | 1.458ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 270.373ms | -14.7% | -23.8% ⚠︎ | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.017ms | -7.9% | -16.8% ⚠︎ | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.96µs | -15.3% | -56.9% ⚠︎ | 1.24µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 10.40µs | +12.8% | -51.9% ⚠︎ | 6.08µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 38.79µs | +6.7% | -56.9% ⚠︎ | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.13µs | -15.4% | -31.4% ⚠︎ | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 17.91µs | -6.4% | -33.4% ⚠︎ | 12.17µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 39.62µs | -16.0% | -34.2% ⚠︎ | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 613.90µs | -11.5% | +4.8% | 435.95µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 5.381ms | -16.2% | -21.8% ⚠︎ | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 29.641ms | -15.8% | -29.6% ⚠︎ | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 320.035ms | -16.3% | -10.6% ⚠︎ | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 512.37µs | -26.2% | -34.7% ⚠︎ | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 738.97µs | -26.1% | -34.7% ⚠︎ | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 3.793ms | -7.6% | -32.0% ⚠︎ | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 472.20µs | -28.8% | -30.6% ⚠︎ | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.616ms | -23.5% | -37.9% ⚠︎ | 987.37µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 30.593ms | +11.9% | -20.6% ⚠︎ | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 469.40µs | -32.6% | -38.1% ⚠︎ | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.273ms | -23.1% | -37.8% ⚠︎ | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 26.393ms | +40.7% | -18.4% ⚠︎ | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 211.47µs | -37.7% | -40.5% ⚠︎ | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 388.92µs | -27.2% | -37.7% ⚠︎ | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.596ms | -29.4% | -38.3% ⚠︎ | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 13.95µs | -43.4% | -29.4% ⚠︎ | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 28.67µs | -32.5% | -14.3% ⚠︎ | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 206.06µs | -22.0% | -13.0% ⚠︎ | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 519.25µs | -25.9% | -35.6% ⚠︎ | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.068ms | -24.6% | -33.2% ⚠︎ | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 22.345ms | +46.1% | -15.4% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 203.04µs | -23.4% | -37.0% ⚠︎ | 140.47µs | 316.46µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.812ms | -20.4% | -33.1% ⚠︎ | 1.263ms | 2.670ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 917.22µs | -21.2% | -33.7% ⚠︎ | 638.71µs | 1.367ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 255.77µs | -18.6% | -50.5% ⚠︎ | 176.39µs | 520.95µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.215ms | -15.5% | -48.1% ⚠︎ | 1.528ms | 4.225ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.126ms | -16.9% | -48.2% ⚠︎ | 790.67µs | 2.160ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 243.27µs | -26.3% | -27.0% ⚠︎ | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 21.162ms | -21.1% | -17.8% ⚠︎ | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 459.807ms | -60.9% | -42.0% ⚠︎ | 369.530ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 216.57µs | -17.3% | -51.7% ⚠︎ | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.661ms | -16.4% | -51.8% ⚠︎ | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 872.28µs | -15.6% | -50.7% ⚠︎ | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.729ms | -24.7% | -29.1% ⚠︎ | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.735ms | -24.1% | -28.8% ⚠︎ | 1.784ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.645ms | -24.5% | -30.2% ⚠︎ | 1.764ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.978ms | -27.7% | -35.3% ⚠︎ | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.686ms | -20.7% | -23.4% ⚠︎ | 1.060ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.624ms | -21.5% | -20.0% ⚠︎ | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.646ms | -21.4% | -19.2% ⚠︎ | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 192.48µs | -20.2% | -35.1% ⚠︎ | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 104.81µs | -26.6% | -9.9% | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.356ms | -22.1% | -23.3% ⚠︎ | 856.60µs | 1.757ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.463ms | -20.3% | -25.3% ⚠︎ | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.573ms | -22.4% | -26.0% ⚠︎ | 924.99µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 69.93µs | -18.5% | -16.0% ⚠︎ | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.240ms | -15.4% | -18.5% ⚠︎ | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 58.80µs | -24.2% | -20.0% ⚠︎ | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.195ms | -17.7% | -18.3% ⚠︎ | 741.79µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.
