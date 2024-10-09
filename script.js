        const PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
        const PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
        const IP = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7];
        const E = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1];
        const P = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25];
        const SHIFTS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        const S_BOXES = [
            [
                [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
                [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
                [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
                [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
            ],
            [
                [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
                [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
                [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
                [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
            ],
            [
                [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
                [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
                [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
                [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
            ],
            [
                [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
                [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
                [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
                [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
            ],
            [
                [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
                [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
                [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
                [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
            ],
            [
                [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
                [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
                [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
                [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
            ],
            [
                [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
                [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
                [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
                [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
            ],
            [
                [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
                [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
                [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
                [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
            ]
        ];
        const FP = [40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25];


        function stringToBinary(str) {
            return str.split('').map(char =>
                char.charCodeAt(0).toString(2).padStart(8, '0')
            ).join('');
        }

        function formatBinary(binary, groupSize) {
            return binary.match(new RegExp(`.{1,${groupSize}}`, 'g')).join(' ');
        }

        function permute(key, table) {
            return table.map(i => key[i - 1]).join('');
        }

        function splitKey(key) {
            return [key.slice(0, 28), key.slice(28)];
        }

        function shiftLeft(key, shift) {
            return key.slice(shift) + key.slice(0, shift);
        }

        function xor(a, b) {
            return a.split('').map((bit, i) => bit === b[i] ? '0' : '1').join('');
        }

        function sBox(input, box) {
            const row = parseInt(input[0] + input[5], 2);
            const col = parseInt(input.slice(1, 5), 2);
            return S_BOXES[box][row][col].toString(2).padStart(4, '0');
        }

        function addResult(title, content) {
            const resultsDiv = document.getElementById('results');
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.innerHTML = `<h3>${title}</h3><p class="monospace">${content}</p>`;
            resultsDiv.appendChild(resultDiv);
        }

        function generateRoundKeys(key) {
            const binaryKey = stringToBinary(key);
            addResult("Initial Binary Key (64 bits)", formatBinary(binaryKey, 8));

            const pc1Key = permute(binaryKey, PC1);
            addResult("After PC-1 Permutation (56 bits)", formatBinary(pc1Key, 7));

            let [C, D] = splitKey(pc1Key);
            addResult("Initial C0 and D0 (28 bits each)", `C0: ${formatBinary(C, 7)}<br>D0: ${formatBinary(D, 7)}`);

            const roundKeys = [];
            for (let i = 0; i < 16; i++) {
                C = shiftLeft(C, SHIFTS[i]);
                D = shiftLeft(D, SHIFTS[i]);
                const combinedKey = C + D;
                const roundKey = permute(combinedKey, PC2);
                roundKeys.push(roundKey);
                addResult(`Round ${i + 1} Key Generation`,
                    `C${i + 1}: ${formatBinary(C, 7)}<br>` +
                    `D${i + 1}: ${formatBinary(D, 7)}<br>` +
                    `K${i + 1}: ${formatBinary(roundKey, 6)}`);
            }
            return roundKeys;
        }

        function desRound(L, R, roundKey, roundNumber) {
            addResult(`Round ${roundNumber} Start`, `L${roundNumber-1}: ${formatBinary(L, 8)}<br>R${roundNumber-1}: ${formatBinary(R, 8)}`);


            const expandedR = permute(R, E);
            addResult(`Round ${roundNumber} Expansion`, `E(R${roundNumber-1}) = ${formatBinary(expandedR, 6)}`);


            const xorResult = xor(expandedR, roundKey);
            addResult(`Round ${roundNumber} XOR with Key`, `E(R${roundNumber-1}) ⊕ K${roundNumber} = ${formatBinary(xorResult, 6)}`);


            let sBoxOutput = '';
            for (let i = 0; i < 8; i++) {
                const sInput = xorResult.substr(i * 6, 6);
                sBoxOutput += sBox(sInput, i);
            }
            addResult(`Round ${roundNumber} S-box Substitution`, `S1(B1)S2(B2)...S8(B8) = ${formatBinary(sBoxOutput, 4)}`);


            const fResult = permute(sBoxOutput, P);
            addResult(`Round ${roundNumber} P-box Permutation`, `P(S1(B1)S2(B2)...S8(B8)) = ${formatBinary(fResult, 8)}`);


            const newR = xor(L, fResult);
            addResult(`Round ${roundNumber} Result`, `L${roundNumber} = R${roundNumber-1} = ${formatBinary(R, 8)}<br>R${roundNumber} = L${roundNumber-1} ⊕ f(R${roundNumber-1}, K${roundNumber}) = ${formatBinary(newR, 8)}`);

            return [R, newR];
        }

        function encryptDES() {
            const keyInput = document.getElementById('initialKey').value.trim();
            const messageInput = document.getElementById('message').value.trim();
            const results = document.getElementById('results');
            results.innerHTML = ''; 

            if (keyInput.length !== 8 || messageInput.length !== 8) {
                addResult("Error", "Both key and message must be exactly 8 characters long.");
                return;
            }


            const roundKeys = generateRoundKeys(keyInput);


            const binaryMessage = stringToBinary(messageInput);
            addResult("Binary Message (64 bits)", formatBinary(binaryMessage, 8));


            let permutedMessage = permute(binaryMessage, IP);
            addResult("After Initial Permutation", formatBinary(permutedMessage, 8));


            let [L, R] = [permutedMessage.slice(0, 32), permutedMessage.slice(32)];


            for (let i = 1; i <= 16; i++) {
                [L, R] = desRound(L, R, roundKeys[i-1], i);
            }

            
            const preOutput = R + L; 
            const finalCiphertext = permute(preOutput, FP);
            addResult("Final Ciphertext", formatBinary(finalCiphertext, 8));
        }