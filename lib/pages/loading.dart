import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio_site/pages/home.dart';

class LoadingPage extends StatefulWidget {
  @override
  _LoadingPageState createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _opacityAnimation;

  @override
  void initState() {
    super.initState();

    // Animasyon kontrolcüsü
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 500), // Opaklık animasyonu süresi
    );

    // Opaklık animasyonu
    _opacityAnimation = Tween<double>(begin: 1.0, end: 0.0).animate(_controller);

    // 3 saniye sonra opaklık animasyonunu başlat
    Future.delayed(const Duration(seconds: 2), () {
      _controller.forward(); // Opaklık animasyonunu başlat
    });

    // Opaklık animasyonu bittiğinde HomePage'e geç
    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const HomeView()),
        );
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose(); // Animasyon kontrolcüsünü temizle
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: AnimatedBuilder(
          animation: _opacityAnimation,
          builder: (context, child) {
            return Opacity(
              opacity: _opacityAnimation.value, // Opaklık değeri
              child: Lottie.asset(
                'assets/loading_animation.json',
                width: 250,
                height: 250,
                repeat: true,
              ),
            );
          },
        ),
      ),
    );
  }
}