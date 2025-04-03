'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a9fa656acc3f33bf7d2644433355f64c",
".git/config": "f6278b13099dad12d0dc0499e91a339a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "570bfbfb25986236a2d8c2b34033de73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e6952ee0a02cca401289e5e3f4ee5265",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8968d7e794b6023f491bc3e67b9bbcbf",
".git/logs/refs/heads/main": "8968d7e794b6023f491bc3e67b9bbcbf",
".git/logs/refs/remotes/origin/main": "a97eafbef9802cd22f0eb1c8e222773b",
".git/objects/07/1afbd4e0dce56d69c1dea16cc097c34a8ba6f8": "c90994bc06725d260f2a9a7f6bafbe7b",
".git/objects/07/23bba69eb52ccc3befb10e3b56d46b96cc6587": "1c5258727fef9e53daf7ea97768774f5",
".git/objects/08/0d611fb216accd497a52b3be3e0593ae325e7d": "6496601104cda7809a7690faab370007",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/08/c186ca5f28f7eada043536b59a72fe8d1c9b29": "4ad7dfe6cc89cc5e36d781b16c6cea45",
".git/objects/09/3a3c7f6dee2f62b58ba9f04a8e0d0963e45cc1": "d5465c756992b07dd5fdc22b4fc1d3c8",
".git/objects/0b/3921d46896a9045491f8dc496d47ae106f7535": "6c91d9b99f30ab7952c70f028a9d2388",
".git/objects/0f/c39fd5969a8a6a46c2835dac36c95115b5f969": "1b206de794d430e7411a4a116811b2f2",
".git/objects/11/799b6e1ed82b73a5a3d782e45e5661bf1cacbd": "3817f361657a0f0cefb50ebb720217d5",
".git/objects/12/b7591dce37b8fd9cfb780eb16d22498693d8b1": "5d973f8baa5e5c7f99abbb66f4de89c9",
".git/objects/14/8f6aa9dc0be58feb703fcca050dc7bbb5aee5c": "96632b9c0601d575d44af08428f8d50d",
".git/objects/15/bb1ed87c0221e261ac699eed4699054c12a516": "d3d4c178fef9c50a5af9bcddfa219e10",
".git/objects/16/acedcf2901d7c4a7815175bbd3a232443b2347": "8e4b7cd272d9d31306ec2c99705d801f",
".git/objects/17/bf6c4c52a08156a9276d858fec052f023b597e": "bd87d33bdb437239b2267d0ba41a1e78",
".git/objects/1a/48659855385b8732642131ab933c6e239824d3": "d946079fd140354b79a7ad20dd7529f2",
".git/objects/1b/995889a20bde90d67f487cbf28549085af2332": "7b175bb006c9dd4668b84872da7eba3d",
".git/objects/1c/05be231f27690bf580cd51b791373456b7fd27": "99854cd72b976913d2a5298ce81dd96e",
".git/objects/1d/8052015f5eaff4c531c56ede5cebc950a0522b": "07741d6111010f2ee1d840e10818c5f4",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/22/d8ba747ac1bbecf1106e999caf46a22d191dc5": "22727ddcafceea016ad17132e1cab3b8",
".git/objects/24/023a0c094ee0981d4ff8abacbcad772968bdab": "7a1744037ac17b4f350338805ada77d1",
".git/objects/25/7be07bbe89a86a112c502114d25e04e3785568": "5289f963741d93ec204d74019eaa6ad0",
".git/objects/28/9c6650bed0c15a988fdb03689b543ad33299a1": "fa7f6ea3a1ff640e126e263e9eb71d9f",
".git/objects/2a/645d2a20b9853c54e512c97a8cea1eef0e8dce": "3c40d137cc5fe9ab1c74526a37fda637",
".git/objects/2e/83349d1a5f23832ad0218cb047ab1262161dc8": "c1194d31fdff4ee449a3540e8dc4d73f",
".git/objects/2e/8e8a4bf11243678c850df3b035216d12214349": "17e44be417a0243e916ddd8fa28197fe",
".git/objects/2f/d6058ef3ff61280edbc01a871e293a33efcf4a": "173731b80e86f1dac970ac5d9da90373",
".git/objects/30/461f91f4612927de3f59c562a2f57068169ba6": "83f132ff112bc64b409812fd79a12c42",
".git/objects/32/74ad3ad85656930ce16bdfd994706670d6faec": "4daf28b098d47d0146a88d3ba657f0ca",
".git/objects/32/8c2436c69749ea3d179c3728a3b8c6bd3f27a5": "2db001ff7936266f61caf8931b74321d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/f4bfa190b6d224ac0473b775e389f4b6854f0a": "c2670b14e19e8a23fc47bc27a2c22ae9",
".git/objects/34/5f4bdf3054dd8f152dca82016c154fa52f33d8": "04bef3080445e60ee1d3a74fa490e6e0",
".git/objects/35/66004994f19f9269ba6be80f30d0217f4d50db": "0966fca4513774cf33cb548e634b1dc6",
".git/objects/36/0e3d5b65ef279b4a115b915aa5b8c15c7aac98": "31ca9a33b18e220338b705bb744269c1",
".git/objects/37/bb100af70d1b9b84ddc43a84e07df9000ba853": "258cf2d09f2cbe096d2fb8bd0241d9cd",
".git/objects/38/0a48818405a83e97b73c2ab7cf4993dfe8d1b8": "a471cc0d7a2fcea218edf34aabc82cc9",
".git/objects/39/0149d655560190bfe30a7e8d81a0137dbbc420": "0bbbc371e0c82f836148b5cb537ccb74",
".git/objects/39/951835f60def72569e34dbd6fa2040b60c20f3": "58bde891b081394118d41d3bdb6153f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/879434fc6b8b1f3132c2beb2f69e56b9f8a078": "baba3eb8dd38283574c5ee664f467e99",
".git/objects/3b/656c6e07947f149dc39d9786d0455360920fcc": "a2f33d3cfcad044bb5e8e476700fe510",
".git/objects/3c/2d0116baed0c52dc96332036af70fd3bcd1a86": "11e5c5405adceeca4512476c204af785",
".git/objects/3d/0b4a84f2922b97e3914e2d868d4ee716ce3fdf": "6ffe74ae2cc4ebc81acb1c4f290f92ac",
".git/objects/3d/0e42718d2b030a351ed4691c632c5032db8462": "54b3685ac15590dfac2e33050627b0f4",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/bff010ed54bf72007f0955edc10a4061b13f62": "11240b6070f4871af4e36783389dc6e1",
".git/objects/41/93eb7d612a35e9f285089f116e0b4a7e0cc683": "52e7282788396a9800c2e5e947cd5d9e",
".git/objects/41/adfc402720f30824ec95fae96e6a9cca5e8a67": "223677965d21c0a73fd498f141ad4c46",
".git/objects/43/184569454559d02b333b33cecebd740ebe8181": "fe0b62929cacec339fd764c6f35d7993",
".git/objects/43/2e7cef16926078ec915db1b991ffd9f0d653a3": "f652a708c3c4ed2fe361826b4ec64a58",
".git/objects/44/545f2e812813cc880c778b52dda667f8480e66": "889a9c14eef9b16faeea648a92ec5cd5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/92ddde3116060ab65f3d41555392a36be50cf8": "7c8a7cfe174d981d2fc5f322a49450d0",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/46/d2a6479c221e9644b444b0c8f51a5489f23c6e": "9bffedc2dc26c554f0a47610160b20f2",
".git/objects/47/226b15964f6022e54ed8d9458f1e48eb65b250": "2b1f68a0ad76685f5ff12e6772fde3df",
".git/objects/49/a1eb923139788a6ef4b8a5450678b10f90e635": "bee96abf1dc902e8b0a0fbb16d9040e8",
".git/objects/4d/d2198f1d82000d43cd5ccadfec4f07106a50c1": "ddd3c4c1eaea1bff100c974b7895ac2b",
".git/objects/4f/03455572151c6268037c5887ea89593b43145d": "96f7e39efd5bda5d87e3529d07eb7a1e",
".git/objects/4f/50801902e7d121d0ad2784aae70ee1c606508e": "e5da7aff5f8ad15f963f9fe988962059",
".git/objects/50/0152dd7b7e2cf94d1b0b4731f541a505167a41": "0ed239a717f3a44379c07bf8e0dd367e",
".git/objects/53/fd7cad359cbcff880fdb0ba5fdb801db4cfb27": "8db73292acb5c4cff967bcf728fec674",
".git/objects/54/1ffefb565adc19096515aec48a15f2e3c7042d": "cf81b4076c982380671fab0dc26ddb60",
".git/objects/54/7816874c3427944bea6bfa37fde398813accbd": "b6499d0b4c77e1f6dcae4479763bae6a",
".git/objects/54/c3e048daf1eb6be32e4b1459c945ac98263eea": "b9329c785cc142dd3d3e0573be43ced9",
".git/objects/56/5d726c254b3ac05e04365fb688fa9035cc84b8": "6239819914a5210079c23b149fa23ba7",
".git/objects/59/57d91e212733cfb40b44047959f33975232660": "13bc532989b2082c571bf4d22eb76f5e",
".git/objects/5b/5279774e833793f067f340b2b2f4044c9f8e32": "0081753b84c828d9283ac4d491ad2ece",
".git/objects/5b/93ba521719dec4ba07ef74c4aa957876cda11b": "a88c5ee6a49c942ff540c8fb6e325dbf",
".git/objects/5e/8fe7c94e0a6068d69feb3929e604b4f42cde63": "ce6971a9a7e7d774470bc23809953a49",
".git/objects/5f/090944eaa6b9be9f3e1719936cf803703219b2": "a4948f50dbb748d9cb380a53183709bc",
".git/objects/60/9a0133ff24853eb54e384ac23838ea4222d22a": "caf2a73cf312790d858049d004f0c2c8",
".git/objects/64/694cc19895207fd8ab176057f3864a0026fad6": "b0837a72b603265dbe100664c923820d",
".git/objects/64/77aa9c7cd797fdc04f4510eb67c72aed9e0639": "9c7fe04e3cb78739a8fcff7c0c387597",
".git/objects/67/c51b6e20ddc6f7cdd5bbf87cb9d13c68b3129b": "420277b9eb2662af63fc6c2b9edfd1ec",
".git/objects/68/42a6354a082f29b8b00a22d4d6a1fe96145986": "a21fb43126f18ce48066c250a2571bdd",
".git/objects/6a/f0f375726517d88defdec06aab3d3b5db3c4cf": "6bfff01f9ace56d36dab70e64e4aba8f",
".git/objects/6b/dc10d0a622c57278244cbb53b628dac38474c7": "3b1b9eb3b43086286e7d0bd03760e135",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/61acc63e2786289d1448bc22a2095a597310c9": "a11fe02d30b11958afa19fc4fa1bb61c",
".git/objects/6d/06f55688322d69e0890619bddcb09ec18b442d": "1f404375bbdfd932a6bd088630bd0622",
".git/objects/6e/2c901ea1b45038527c8f39d9a0bac106da7f60": "7c82dc4fef10292a8115582532e05e8a",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/6e/db693a65fa7147de451eb9b993d1dcd38a1a62": "e026bfdc20a4d429bf7da4f71dd97de8",
".git/objects/6f/24a4cb6d99a84edf7e01c4437fe915d9095220": "b8bf6db36d37025d06104ef31ebeabb3",
".git/objects/70/c74a0c0adb7966dce7fa810ad2db6a861c7825": "5fbd157053c1565bda88b23edb155956",
".git/objects/70/ff69071c693cc9b73d665907d0ccf2d20cddc1": "c052d41149b35f51711ec9434814bee6",
".git/objects/72/e2fec809b6ad7086ed06b611911753aac30710": "4753666054ace38d949a68067fbe92ce",
".git/objects/73/3b39c678e50305b753ffcd27bc8366915817c4": "d4647dcad5cd7de570040cfa92b65334",
".git/objects/75/36b2b34e11bbc267c7dee2bd61f6c090d0eb41": "e2c3f18e4aebf4999befb18a15f37c98",
".git/objects/78/23ab7562a35c339473d83e5cf8fc83ae9f7ea2": "658ae9eb6a6b41d490fb95cf14b2a758",
".git/objects/78/ab0ba867f9f3f697549d1d798aa88fe6ecfc56": "f5198d8d9ccb4ce8e4f59289b4632b48",
".git/objects/79/7cb826024fdfdca3d2c7bc0f6d84f1a4817216": "8cb51e44f4ea25ca4fdb9410d72b2003",
".git/objects/7a/6be12f200b228fa8480f90a80be6f29bed8290": "055912f32e58dbf9cd9ef6d021135f65",
".git/objects/7b/a7dcca1a047ad46153ea30a787b9ff75b02d7a": "fc0321a4f3e7827f20ce0caf23f412b9",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/ad94afddb9ee2c5942332f619c4016b7c36af2": "880cc704fd103c494eecb0a668099032",
".git/objects/7d/c083e1982a8a19bd0a6954c5edfc84c288733e": "f466455dee778d1db95211f10ff54049",
".git/objects/7e/a4e379f0b643f7a779fd28aafaf6518b1f075e": "d9de19a7623fe0806ce98504e7794671",
".git/objects/80/131f9d447b1bb58cd3fc5bb29981347a1f816e": "25e6358e04f4c5ceed754c5741946a83",
".git/objects/81/05b5230dcce2358f288432eefe636de0404dcf": "86f4e80da706c086a10b2e201a5977f6",
".git/objects/83/8fc0b1ace82138d135ac70077275c296fea0ad": "18e46c1f92e14da332027e47b0a89ccf",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/05f7d92dd78ea1fbf836130c950036cdd8db47": "b967506b861cbf39b63e46c41c3bcf05",
".git/objects/86/a6167cbd458ceb71c73f0ab59ebd894b224737": "367ef7615fffaa4d8424f23f34019895",
".git/objects/86/c92c6e6f24c55290f971aae871e370569c1dd6": "b77e5d732d7caf8e3afb0930ff414e80",
".git/objects/87/96489ff5609af2d0d9ed463246599c30386326": "065f18f1a45de416ed1410a23f4d5f58",
".git/objects/87/ff0124b15f44e7ce0cad6db92f6d9b221a9442": "6f56beeb29303b376f2f0a6f80624688",
".git/objects/88/1b83cf04ba00001f6afe6c50c8423c6ae88da4": "502e5251fd3636d99de05175cd432a4e",
".git/objects/88/9b7d03d0f95ff1338325f2d3be5bf569d14904": "34b649e554bcbed28a37453019c3d237",
".git/objects/8c/fc2a859435deb373c19360d04171e79d47b12a": "a062e47074e96d564d24b0f9408ed3c5",
".git/objects/8d/57f35d8cc85caf538d17ca5e1f2620164c49a6": "2e2235685bac7eb6a1537a9718191e9c",
".git/objects/8d/fc9f2349a257a3d0abad34a934925e076d3ad6": "ac019d638f38dc88a60dec73dd4df6e1",
".git/objects/8f/2233742065d59038c8be6635899acff4fe6c7d": "c1e9a3f5e53722f030817ef6106f6a1d",
".git/objects/90/3f222b40636e3c7b9d64edf387ffdb8c93d777": "2d6774696428a16090a9e5507131e11e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/cac0d9ebef80e2497f0ff1ea2ad553406bc7bc": "6216b44d79cf73051a1be0f0ed5ee324",
".git/objects/93/21966ffc4203cbf39e5969685204c5a80c7561": "6787618934c6a1513efadeeb05247065",
".git/objects/94/0d838aa2fdfc4179e4884ee68a5fa347257f13": "4db43538174ceac894476fc1153b4965",
".git/objects/95/5ae586f398ebf891457655ec0f79d899047f03": "da56f6a869147d4243f20d45cb76a8df",
".git/objects/96/a866b4360c416ef9cfb764a6375ef358ad6c84": "1eadd1f7b8bd7f1620b4e70f0b4dcd18",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/6dc9e8235f49c205175ace93430c224d28be96": "e250c53ecb4a88fc64b8c581c1e1038b",
".git/objects/9a/3d65fb99236d19f712ef8969bdb19fb0eccca2": "360c4e634569c43a4cf8d133aa177e1b",
".git/objects/9b/808fbd31b0846e0b2a05c718b4155f5b560c77": "4d3d2b17b8ba1e987f6e1ccb30e12bd4",
".git/objects/9c/9543d91526b06f73c6be596a5285673a841fe9": "de97fdb0c9ccf9a7b8ec8ade8c4c7460",
".git/objects/9c/c49d119b1fd7f85d731e2b5c5f2e51ad1d5512": "28e8879195ebfcb347c98869bcca3f1c",
".git/objects/9e/698fa2530f5f19181fb30c7e3f6d74d5465da6": "2ad5daab3b6a120f769ae46a3585fd3e",
".git/objects/a0/c782caed4f5ecb50c25848b7c056529e0e5074": "21810e91dd112f9b37a5f58cd8f467f3",
".git/objects/a2/1b8ed21e89e4c1efcd96e5aae35ae21eaf7078": "e82328c40c665686c947e086014b893e",
".git/objects/a3/2a6882dbc614d02667d6c4ebfb4860339714c6": "d9db7cae6c8a75ad514aefd492d5a205",
".git/objects/a3/3ad757676b8e964940865c01185d82fefca9fa": "af8a3b021f27b218dbdefa509c23420b",
".git/objects/a4/5edb3c2caa3162cb9e8705e0cd758c1183f50c": "b1f0ec9cfd1763120ae74e94a0e2f964",
".git/objects/a5/48321af695352444a9f89c590177d13d0fa869": "1296d7c4b4b65dde4674c19ae3620b15",
".git/objects/a7/081f28c332605672910ff018d335a5c942d19c": "be005892d0a6bf18c5e4755b980b95ef",
".git/objects/ab/672ebf4844f681d5d393094f7cc2651eb22e09": "4697c94f942340d37d959bb10be9bd25",
".git/objects/ae/cd1635ab6b4dcfe7b958de92af767936121ce6": "b5eab2c2e2211913d6323563375d9da0",
".git/objects/ae/eb01d9b0ae91b9e10a172342d4a07d4e72d8c5": "821610652ae04c98f9591317827f08ca",
".git/objects/b0/b3bc0241e8078d39a91897af71ca4dcacbc2a3": "77f313ce1b5de022355d80f378ad9e6e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/985b38e5953aad5b4d80251c0eea0588fbd136": "9f94ab7924e5f5836bc8e2abd40c885f",
".git/objects/b2/bb31a484bf02e43675af02dc2d4815bfc2a82b": "befa4c2da4df83c18181a649f8fa9cc1",
".git/objects/b3/bf79cfacee61e270fc02dc40cfd9fd44d3c4f6": "c80b69adfb793861415fa2d81dba9832",
".git/objects/b4/ee96685f07ae9ac4141878ddd86c8580fd10d9": "8b35a7bada7e1d365418386423c5c254",
".git/objects/b8/900590f7dc3a0cf5d22174ead58246fd6dd984": "469cf891db1bbed0ca5dd03a69eacfd1",
".git/objects/b8/a44d2db0a18c12d7cf03c3763ef23991c3b5ab": "9007ecebc054d5607b15f4399b9d8979",
".git/objects/b9/27e1e71a3bb4b0c2c9be928bbdebb6a281407f": "e029d9fc9f5b023aecbc7ffdfcb5c556",
".git/objects/ba/4476248c7f5ff22f5e8e61f06d079716de37ee": "2a7452cc1fc29f75e7df82c34a213d82",
".git/objects/ba/8e25c587c0ecfb7fd73621e1e94916b46e1812": "b9b7de181ae56cf7dbbe22b94d1dcb01",
".git/objects/ba/f1cb8ba67fef96f1d4e2b94bff54032b633aac": "ed888fd51409d6c10c4d332159865135",
".git/objects/bd/6f82cf4f4270090e4b57a433269a2b32c95873": "3e4a338979d26b9011ac7a7663aa02e8",
".git/objects/be/5e159d4328a9763e8b8da3bd50a69b85eaa428": "42a21107702bf752a826bef7303e5349",
".git/objects/c0/742332946a8aacd71200aa70e959ff2ddd9e96": "28bc427683f208ff2618878b41441b8a",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/d27ce4ed5e55cb281c828c8bfb8a62077e1032": "911f6bab152cb3a3d7e4e0b894f0b24a",
".git/objects/c3/359cf20b6e6ff082d62e9f8befd1a49f700a65": "27037de68e46a5f22b30d79de1c99906",
".git/objects/c3/cac843b7a379b4c8a64e0b5c176263d342d08b": "c8f98aeb2cd525a86d4cb25d32b9c12a",
".git/objects/c8/a1ff87fcff51bb8b7c857c13cfd9574af56202": "623ef9fbf88501b698d3f19148d4fd6d",
".git/objects/c9/ccd5db1543226e62463aa35b361c3c1b1ada0a": "c4ba4aa1865d7df052f506ff628d8a26",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/161cc77c7270d522533731877a9dcf9d28f67c": "abcf7efeabd0c070756a6d8d0bca0519",
".git/objects/d2/6641bccb88b907bb6e72a6e80a3409f9b00b2f": "66a981292340c0fd11ac5992535f26c1",
".git/objects/d2/dab18a17a7ffb666094bd219715e31765864ab": "6783eb66d60e79aa22828e1ba982e7be",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/0e597a730ff07f3659bad39e9e7ae8cde898ba": "545dff949f203b02fb8fc6e7717c77ef",
".git/objects/d6/fe1f9107551cabfed5eadf406d7e2b9606b22c": "8af3c927b595486415ccf236e57ee914",
".git/objects/d7/032396e32395998c66870e07579f98154d5362": "e6d1e5ae16e9fc424b9932a184f3ef13",
".git/objects/d7/0bc029d64d1f493d05d14e68d893992247ca68": "b39d655bee5be8f9993a310edc9c2c3e",
".git/objects/d7/5fc703111ec05ca986e08dd7571a0f55b986de": "848108d4f6d9c4d0a4629bb95dc50b72",
".git/objects/d8/4268785788698e4eeb14226213fbfda81a70fb": "b05b1719a1950b2b794c48709c58207a",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/d8/f70c22ddd3d85d783ca818c8b871b48663b18b": "a4f837a20f7835087828e03104a11eec",
".git/objects/da/141cbc059ffac728776a691b3e31c7b7d226d6": "b9042c2b24c3c892579faf473b28381f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/0adfbdf4d224c90efc06ca8c341bac7850826f": "271f3146566ad3a95c5c2589b16961ee",
".git/objects/dc/29214b37af191a52c76b4dd563f2442c7f060e": "9c0c0b8e2b400c8704934b6682f2b784",
".git/objects/de/e0e5f80339db37b36056c52fce330f042b2561": "0d0b0458fc84764af75ca565dcc2889f",
".git/objects/e0/1836d1b19176e2b3e70d2e7b5671b9cc2ea016": "dae90fc02cc4db4200a4c86fe6e48d14",
".git/objects/e2/35b05d51ee73bebc58990a45ad9e74327b9159": "4ef7e0a3994b42ff74d68e85367b78db",
".git/objects/e4/e69bd7c616e7e97ac40e3285516cff1c7614bd": "83c39d2490a352cb780e6fca557b31b4",
".git/objects/e5/0c9c543f50ba3f2564eb82f80463ce54b30ab4": "e643173ec8ce68399d2ca20c3d2d16e5",
".git/objects/e5/56b3b4169081345e35bad103369be141928857": "d19c42234dc8e3271035e008c6df5e26",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "4560c7614cccd669046b9dae6b1f6e14",
".git/objects/e7/8cf38782dcb5416314aa4814c65eb4718abd80": "b6f6c3c804152ed98fcf20b9f549fe82",
".git/objects/e8/46f9d8723849eb01ca7e369137acc2e32fe6ec": "4cd38f3b30f7e1ce4673a2aa8f820363",
".git/objects/e9/3319e1b7e6d2a11204b55c84d4ab1990fad5ad": "97cfa4b9f4942de0a0b8eb4a77c787ca",
".git/objects/e9/87cc322577fe53c00f0d66e1937838b05e581a": "a020fc277fd28c0e825b1a4046196c4e",
".git/objects/e9/d1dd81243be6a7fba268cf81c9f4b56f9c0392": "2b7acaa8ea1fc1dfc95bde7679947b71",
".git/objects/ea/a9d618320c15f58414e8800a991eb8a168a3e7": "203d24bd52ab5d660bb61c5e28d67182",
".git/objects/ed/f87726e996b614d832034b34d5c09341797cee": "2e7382d91f027f1433427ecfecc582a8",
".git/objects/ef/ade6bd42461faf0a32179d621ce7045feadaee": "ba3c3f71bb032211f473d7d055b112e9",
".git/objects/ef/c8da422985346a12a497bc56579bfcd97a35fd": "68741b9b8b19e07665428c3f755281fe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/20a84c5411cbf6f3dd6c358ed77decbdc510ae": "8530935deb18a9d3d2932004676a316c",
".git/objects/f2/ce521bd5b6bb8796a464b36ce5dda1bdaf1a53": "4a5ffb40768b9d63412d2ec4e3db2e84",
".git/objects/f2/fbe8318b5677ec4a9b06c77c8bb616d3f930eb": "f23115ec402243a23d8e4197fe016c4c",
".git/objects/f4/f16658bfdebbfef54b5af39a0fa965b5202289": "918168d84134c8b78b045774994cd1d8",
".git/objects/f7/5a770af9b7a8723c4c70adeaee41ca6c20ce97": "f72027c5b379b678bfb3d8eda93f1b06",
".git/objects/f7/d616fd1cf4dfe0dd3fc212ef4becb9bd6e9a86": "a68cd619616ea7a124c9e4002bb5c7bb",
".git/objects/f8/e6da930d0dd559ebf406363725dfe1cfd1c00e": "0d31140c1d9fbd7ab9b0492a83389fd0",
".git/objects/fb/00a0c9e948771275467eee7b62195df038a5c1": "589051956ad0130416db757a610a13db",
".git/objects/fe/31d7b03ad45b792a084b80fbb47b8b17d90f60": "e99eef42f39b28a0921b7de9ce12f702",
".git/objects/ff/5949cd60d271474ca8c6607184646203b08fe6": "d1935ebe847bf531f6f09848135ba0c1",
".git/ORIG_HEAD": "361847e7367fdb32cf6a46d94804ef66",
".git/refs/heads/main": "3d8f54274ee26ddd294ac3f98b8189ff",
".git/refs/remotes/origin/main": "3d8f54274ee26ddd294ac3f98b8189ff",
"assets/AssetManifest.bin": "e548ed141258ba17a7edc2bdabb294a5",
"assets/AssetManifest.bin.json": "fabd635aa7824c6ab7e9e3afc0190bc3",
"assets/AssetManifest.json": "11cc7d13a7162faaca845ee06d5bfbbd",
"assets/assets/fonts/FiraCode-Bold.ttf": "016bcf67f409675ff98373081ba753dd",
"assets/assets/fonts/FiraCode-Light.ttf": "456f8f2a9dc64ad81c6fb84908aeb751",
"assets/assets/fonts/FiraCode-Regular.ttf": "301dd380625eb548238ae3c39ec9f12b",
"assets/assets/images/cloud-api.png": "f9cbe2cda7626ed15ece095d4a8d6e99",
"assets/assets/images/github.png": "2d14ec84fab050386d811975662cce8a",
"assets/assets/images/linkedin.png": "f2e1d824d4bd16243707d9ae4e5a99e3",
"assets/assets/images/medium.png": "588b396b5ad7d4ea61f3313d8bfc6718",
"assets/assets/images/mobile-development.png": "504aeb8a75f6b2ec0a15d81f6fd1c618",
"assets/assets/images/portfolio.png": "3f06e8f5fbf36c87d9034b8713ceb9a7",
"assets/assets/images/rocket.png": "daed3f7b2325e2cf08cd4ff7e2b4239e",
"assets/assets/images/ternai.png": "fd94cd87182eb6e339bdd8ae759eb17d",
"assets/assets/loading_animation.json": "ca788a337e1042a9f5e8b0335d0325ac",
"assets/FontManifest.json": "cd369fbb328ec1834b0386724def8d17",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a8c88c6e3636d6e3a5186966ad6cd404",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "72223b06c708cbdecab9a0904d1ad3fb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2b4b4f26c132d1572a30f153d9a1d843",
"icons/apple-touch-icon.png": "0284384156cac7fe6a3f72bc3106cf8f",
"icons/icon-192.png": "7c427c54919b9a2a35c1aea91713f864",
"icons/icon-512.png": "46dcf399499aa95b784705ee73da5ebb",
"index.html": "82913da9b27c8b7fd7f1edbd7d8db106",
"/": "82913da9b27c8b7fd7f1edbd7d8db106",
"main.dart.js": "bd6964100af8ee1908d93961fdf0fa82",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
