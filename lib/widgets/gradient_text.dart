import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';

class GradientText extends StatelessWidget {
  final String text;
  final double fontSize;

  const GradientText({
    super.key,
    required this.text,
    this.fontSize = 40, // Varsayılan font boyutu
  });

  @override
  Widget build(BuildContext context) {
    return ShaderMask(
      shaderCallback: (bounds) => const LinearGradient(
        colors: [AppColors.wine, AppColors.orchidDust], // Gradient renkleri
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      ).createShader(bounds),
      child: Text(
        text,
        style: TextStyle(
          fontSize: fontSize,
          fontWeight: FontWeight.bold,
          fontFamily: 'FiraCode',
          color: Colors.white, // Önemli: Gradient düzgün çalışsın diye beyaz bırak
        ),
      ),
    );
  }
}