YUI.add('lib-cipher-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'lib.Cipher',

        testPlaintextInputIntegrity: function () {
            var plaintext = C.lib.WordArray.create([0x00000000, 0x00000000]);
            var key = C.lib.WordArray.create([0x01234567, 0x89abcdef]);

            var expectedPlaintext = plaintext.toString();
            var expectedKey = key.toString();

            C.RC4.encrypt(plaintext, key);

            Y.Assert.areEqual(expectedPlaintext, plaintext);
            Y.Assert.areEqual(expectedKey, key);
        },

        testCiphertextInputIntegrity: function () {
            var rawCiphertext = C.lib.WordArray.create([0x7494c2e7, 0x104b0879]);
            var key = C.lib.WordArray.create([0x01234567, 0x89abcdef]);

            var expectedRawCiphertext = rawCiphertext.toString();
            var expectedKey = key.toString();

            var ciphertext = C.lib.Ciphertext.create(rawCiphertext);
            C.RC4.decrypt(ciphertext, key);

            Y.Assert.areEqual(expectedRawCiphertext, rawCiphertext);
            Y.Assert.areEqual(expectedKey, key);
        }
    }));
}, '$Rev$');