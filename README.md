## aui-perf nightly record

_34 points · 2026-10-08T04:44:32.688Z to 2026-11-10T04:29:10.238Z · latest runner: AMD EPYC 9V74 80-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 937.29µs | -0.1% | -35.9% ⚠︎ | 635.00µs | 1.433ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.081ms | +0.1% | -31.5% ⚠︎ | 715.47µs | 1.550ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 46.09µs | +0.9% | -41.7% ⚠︎ | 32.96µs | 78.94µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 525.44µs | -0.2% | -35.6% ⚠︎ | 362.82µs | 810.15µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 8.226ms | +0.2% | -34.9% ⚠︎ | 5.720ms | 12.531ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 239.04µs | +1.8% | -38.0% ⚠︎ | 157.97µs | 383.99µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.110ms | +2.6% | -33.1% ⚠︎ | 1.391ms | 3.159ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 8.185ms | +0.5% | -33.8% ⚠︎ | 5.591ms | 12.362ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.66µs | -1.8% | -42.1% ⚠︎ | 5.92µs | 14.54µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 72.21µs | -0.5% | -42.9% ⚠︎ | 46.46µs | 122.92µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 285.68µs | -0.7% | -42.7% ⚠︎ | 183.90µs | 485.35µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 59.23µs | -5.2% | -17.2% ⚠︎ | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 554.17µs | -1.2% | -21.5% ⚠︎ | 405.26µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 7.44µs | -4.3% | -28.1% ⚠︎ | 5.54µs | 11.05µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 61.84µs | -2.3% | -27.3% ⚠︎ | 45.85µs | 90.23µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 585.93µs | -1.0% | -53.7% ⚠︎ | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.036ms | +0.3% | -51.0% ⚠︎ | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 20.142ms | +0.6% | -51.1% ⚠︎ | 13.513ms | 40.641ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 337.65µs | -2.6% | -54.2% ⚠︎ | 228.27µs | 717.50µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.977ms | -3.9% | -52.9% ⚠︎ | 2.016ms | 6.156ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 11.888ms | -3.3% | -52.2% ⚠︎ | 8.037ms | 24.634ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 44.31µs | +2.2% | -20.0% ⚠︎ | 30.11µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 462.40µs | +1.5% | -20.9% ⚠︎ | 317.99µs | 619.94µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.540ms | -0.1% | -20.5% ⚠︎ | 1.755ms | 3.392ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 63.12µs | +0.8% | -24.3% ⚠︎ | 40.51µs | 86.47µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 636.33µs | +0.2% | -25.5% ⚠︎ | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 3.465ms | -0.7% | -24.8% ⚠︎ | 2.265ms | 4.713ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 37.33µs | +0.5% | -28.1% ⚠︎ | 24.02µs | 53.39µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 358.83µs | +0.6% | -28.3% ⚠︎ | 229.02µs | 516.13µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.012ms | +0.4% | -25.9% ⚠︎ | 1.338ms | 2.844ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.17µs | -2.8% | -21.4% ⚠︎ | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.35µs | +4.0% | -20.8% ⚠︎ | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.11µs | -0.5% | -13.8% ⚠︎ | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.55µs | -1.0% | -27.2% ⚠︎ | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 3.15µs | +0.4% | -32.4% ⚠︎ | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 28.92µs | -0.2% | -33.5% ⚠︎ | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 127.00µs | +4.9% | -16.4% ⚠︎ | 92.35µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 834.33µs | -4.6% | -18.4% ⚠︎ | 638.75µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.054ms | +0.0% | -27.0% ⚠︎ | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.187ms | +1.7% | -29.2% ⚠︎ | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 14.224ms | +2.0% | -19.4% ⚠︎ | 9.369ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 15.473ms | +2.5% | -20.6% ⚠︎ | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.039ms | +3.7% | -39.1% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.074ms | -0.6% | -33.9% ⚠︎ | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 7.013ms | -3.1% | -23.7% ⚠︎ | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.410ms | +4.9% | +25.4% ⚠︎ | 1.142ms | 1.506ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.406ms | -2.8% | -17.7% ⚠︎ | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.546ms | -4.7% | -1.4% | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 225.18µs | -1.8% | -18.1% ⚠︎ | 164.45µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.017ms | -5.5% | -7.8% | 1.459ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 242.323ms | -0.7% | -28.7% ⚠︎ | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 9.660ms | -1.6% | -8.3% | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.90µs | -0.8% | -16.3% ⚠︎ | 1.27µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.65µs | +0.1% | +10.9% ⚠︎ | 6.19µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 33.87µs | +0.7% | +0.1% | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.09µs | -0.6% | -16.2% ⚠︎ | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 17.13µs | +3.0% | -8.7% | 12.39µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 39.59µs | +0.1% | -15.7% ⚠︎ | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 619.57µs | +0.7% | -2.4% | 441.50µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 4.292ms | -3.4% | -43.7% ⚠︎ | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 24.096ms | -2.3% | -43.6% ⚠︎ | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 294.681ms | -2.5% | -23.5% ⚠︎ | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 449.56µs | -5.9% | -36.5% ⚠︎ | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 765.96µs | -0.2% | -25.5% ⚠︎ | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 3.397ms | +12.7% | -21.0% ⚠︎ | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 462.46µs | +0.2% | -26.8% ⚠︎ | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.624ms | +3.6% | -22.9% ⚠︎ | 984.70µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 22.734ms | +1.3% | -7.6% | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 434.99µs | -3.3% | -37.8% ⚠︎ | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.225ms | +1.3% | -29.1% ⚠︎ | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 16.705ms | +5.1% | -6.8% | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 222.36µs | +0.0% | -37.0% ⚠︎ | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 378.48µs | -1.6% | -30.6% ⚠︎ | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.349ms | -5.0% | -17.6% ⚠︎ | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 13.19µs | -0.4% | -44.0% ⚠︎ | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 27.68µs | -2.4% | -27.0% ⚠︎ | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 201.46µs | +1.3% | -13.9% ⚠︎ | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 475.35µs | +5.8% | -29.0% ⚠︎ | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.082ms | -1.5% | -21.0% ⚠︎ | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 12.120ms | -14.4% | -20.7% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 200.74µs | -1.1% | -36.6% ⚠︎ | 140.47µs | 312.26µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.799ms | -1.1% | -32.6% ⚠︎ | 1.263ms | 2.642ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 910.52µs | -0.8% | -33.4% ⚠︎ | 638.71µs | 1.347ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 252.75µs | +1.2% | -51.5% ⚠︎ | 176.39µs | 517.74µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.186ms | -0.8% | -47.6% ⚠︎ | 1.528ms | 4.225ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.108ms | +0.1% | -48.4% ⚠︎ | 790.67µs | 2.160ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 241.77µs | +0.3% | -30.5% ⚠︎ | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 21.217ms | +2.0% | -19.4% ⚠︎ | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 455.280ms | -0.3% | -32.4% ⚠︎ | 371.567ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 219.02µs | +7.6% | -52.7% ⚠︎ | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.648ms | -1.7% | -53.3% ⚠︎ | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 861.25µs | +1.3% | -52.8% ⚠︎ | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.680ms | -1.8% | -21.1% ⚠︎ | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.676ms | -3.2% | -21.2% ⚠︎ | 1.852ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.588ms | -3.0% | -21.2% ⚠︎ | 1.802ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.881ms | -0.3% | -38.4% ⚠︎ | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.548ms | -1.1% | -23.9% ⚠︎ | 1.074ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.457ms | -5.5% | -22.4% ⚠︎ | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.453ms | -5.6% | -22.3% ⚠︎ | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 188.94µs | -1.0% | -18.5% ⚠︎ | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 104.64µs | +0.2% | -25.9% ⚠︎ | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.312ms | -3.7% | -22.3% ⚠︎ | 868.75µs | 1.757ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.414ms | -1.1% | -22.7% ⚠︎ | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.531ms | -1.4% | -23.3% ⚠︎ | 927.24µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 66.68µs | -1.7% | -12.9% ⚠︎ | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.193ms | +1.0% | -19.0% ⚠︎ | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 57.38µs | -2.8% | -10.9% ⚠︎ | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.155ms | -2.6% | -20.4% ⚠︎ | 741.79µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.
