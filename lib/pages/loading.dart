import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio_site/pages/home.dart';

class LoadingPage extends StatefulWidget {
  @override
  _LoadingPageState createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> {
  @override
  void initState() {
    super.initState();
    // 3 saniye sonra HomePage'e yönlendir
    Future.delayed(const Duration(seconds: 1), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const HomeView()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Lottie.asset(
          'assets/loading_animation.json',
          width: 250,
          height: 250,
          repeat: true,
        ),
      ),
    );
  }
}