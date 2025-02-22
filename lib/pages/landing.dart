import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';
import 'dart:async';
import 'package:portfolio_site/pages/loading.dart'; //* asenkron işlemler için kullanılır

//*metni tek tek aldığım için stful widget kullandım
class LandingView extends StatefulWidget {
  const LandingView({super.key});

  @override
  State<LandingView> createState() => _LandingViewState();
}

class _LandingViewState extends State<LandingView> {
  //*child: Text('Hello World!'), yazısını parçalara ayırdım
  final List<Map<String, dynamic>> codeSnippets = [
    {'text': 'child', 'color': AppColors.wine},
    {'text': ':', 'color': AppColors.orchidDust},
    {'text': ' Text', 'color': AppColors.fushiaBlush},
    {'text': '(', 'color': AppColors.nude},
    {'text': '\'Hello World!\'', 'color': AppColors.oatMilk},
    {'text': ')', 'color': AppColors.nude},
    {'text': ',', 'color': AppColors.wine},
    {'text': '\nchild', 'color': AppColors.wine},
    {'text': ':', 'color': AppColors.orchidDust},
    {'text': ' Text', 'color': AppColors.fushiaBlush},
    {'text': '(', 'color': AppColors.nude},
    {'text': '\'Welcome To My Portfolio!\'', 'color': AppColors.oatMilk},
    {'text': ')', 'color': AppColors.nude},
  ];

  String _displayText = ""; //* şu an görüntülenen metni tutar
  int _charIndex = 0; //* mevcut metinde kaçıncı karakter yazıldığını belirtir
  List<TextSpan> _textSpans = []; //* özel stilli metin parçalarını tutar. TextSpan metni parçalamamıza ve her parçayı farklı stilize edebilmemizi sağlar
  int _snippetIndex = 0; //* metnin kaçıncı parçasının yazıldığını tutar

  @override //* annotation. initState fonksiyonu state sınıfının bir fonksiyonudur ve burada initState fonksiyonunu yeniden tanımlıyorum
  //* initState: bir widget ilk oluşturulduğunda bu fonk bir kere çağırılır. ekren ilk defa render edilmeden öce çağırılır
  void initState() {
    super.initState();
    _startTypingEffect();
  }

  void _startTypingEffect() {
    Timer.periodic(const Duration(milliseconds: 80), (timer) {
      //* Timer.periodic belirlenen zamanda bir işlem yapar
      if (_snippetIndex < codeSnippets.length) //* yazılacak metnin indexi toplam liste indexinden küçükse hala yazılacak bir şeyler var demektir
      {
        String currentText = codeSnippets[_snippetIndex]['text'];
        if (_charIndex < currentText.length) //* o anki code parçasının kaçıncı karakteri yazılıyor kontrolü
        {
          setState(() {
            //* flutterda UI'ı güncellemek için kullanılan fonk
            _displayText += currentText[_charIndex];
            _charIndex++;
          });
        } else {
          //* yazılan metin tamamlandıktan sonra TextSpan widgetına dönüştürülür ve _textSpans listesine eklenir
          setState(() {
            _textSpans.add(TextSpan(
              text: currentText,
              style: TextStyle(
                  color: codeSnippets[_snippetIndex]['color'],
                  fontSize: _getTextSize(context), // Ekran boyutuna göre yazı boyutu
                  fontFamily: 'FiraCode'),
            ));
            _displayText = ""; //* geçici olarak gösterilen metin sıfırlanır
            _charIndex = 0; //* harf indexi sıfırlanır
            _snippetIndex++; //* metindeki bir sonraki parçaya geçilir
          });
        }
      } else {
        timer.cancel();
        Future.delayed(const Duration(milliseconds: 500), () {
        Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => LoadingPage()),
        );
      });
      }
    });
  }

  // Ekran boyutuna göre yazı boyutunu belirleyen fonksiyon
  double _getTextSize(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth > 950) {
      return 18;
    } else if (screenWidth >= 600 && screenWidth <= 950) {
      return 15;
    } else {
      return 14;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: RichText( //* metnin bir kısmını farklı stil, renk veya fontlarla göstermek istiyorsak RichText kullanırız.
          text: TextSpan(
            children: [
              ..._textSpans,
              TextSpan(
                text: _displayText,
                style: TextStyle(
                  color: _snippetIndex < codeSnippets.length ? codeSnippets[_snippetIndex]['color'] : Colors.white,
                  fontSize: _getTextSize(context), // Ekran boyutuna göre yazı boyutu
                  fontFamily: 'FiraCode'
                )
              )
            ]
          )
        ),
      ),
    );
  }
}