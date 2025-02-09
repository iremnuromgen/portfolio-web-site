import 'package:flutter/material.dart';
import 'dart:ui';
import 'package:portfolio_site/constants/about_text.dart';
import 'package:portfolio_site/widgets/gradient_text.dart';
import 'package:portfolio_site/constants/experience_data.dart'; // experience_data import edildi
import 'package:portfolio_site/constants/colors.dart';

class AboutSection extends StatefulWidget {
  const AboutSection({super.key});

  @override
  State<AboutSection> createState() => _AboutSectionState();
}

class _AboutSectionState extends State<AboutSection> {
  int _currentIndex = 0;

  void _nextExperience() {
    setState(() {
      _currentIndex = (_currentIndex + 1) % experienceDetails.length;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: MediaQuery.of(context).size.height,
      padding: const EdgeInsets.all(16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const SizedBox(width: 60), // Sidebar boşluğu
          Container(
            width: 600,
            height: 550,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 8, sigmaY: 8),
                child: Container(
                  padding: const EdgeInsets.all(40.0), // padding hepsi için
                  decoration: BoxDecoration(
                    color: const Color.fromARGB(255, 81, 79, 79).withOpacity(0.2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      GradientText(text: "ABOUT ME"),
                      SizedBox(height: 20),
                      Text(
                        aboutMeText,
                        style: TextStyle(
                          fontSize: 14,
                          fontFamily: 'FiraCode',
                          color: AppColors.textPrimary,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
          const SizedBox(width: 30),
          Container(
            width: 600,
            height: 550,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                child: Container(
                  padding: const EdgeInsets.all(40.0), // padding hepsi için
                  decoration: BoxDecoration(
                    color: const Color.fromARGB(255, 81, 79, 79).withOpacity(0.2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const GradientText( text: "EXPERIENCE"),
                      const SizedBox(height: 20),
                      // Başlık
                      Text(
                        experienceDetails[_currentIndex]['title'],
                        style: const TextStyle(
                          fontSize: 15,  // Başlık boyutu
                          fontWeight: FontWeight.bold,
                          fontFamily: 'FiraCode', // Başlık fontu
                          color: AppColors.nude,
                        ),
                      ),
                      const SizedBox(height: 20),
                      // Şirket adı ve tarih
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            experienceDetails[_currentIndex]['company'],
                            style: const TextStyle(
                              fontSize: 14,
                              fontFamily: 'FiraCode', // Zen Arge fontu
                              color: AppColors.oatMilk,
                            ),
                          ),
                          Text(
                            experienceDetails[_currentIndex]['date'],
                            style: const TextStyle(
                              fontSize: 14,
                              fontFamily: 'FiraCode', // Tarih fontu
                              color: AppColors.oatMilk,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 20),
                      // Madde madde görevler
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: experienceDetails[_currentIndex]['tasks']
                            .map<Widget>((task) => Text(
                                  "• $task",
                                  style: const TextStyle(
                                    fontSize: 14,
                                    fontFamily: 'FiraCode',
                                    color: AppColors.textPrimary,
                                  ),
                                ))
                            .toList(),
                      ),
                      const SizedBox(height: 16),
                      // Ok simgeleri (sol ve sağ)
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          IconButton(
                            onPressed: _nextExperience,
                            icon: const Icon(
                              Icons.arrow_back,
                              size: 40,
                              color: AppColors.textPrimary,
                            ),
                          ),
                          IconButton(
                            onPressed: _nextExperience,
                            icon: const Icon(
                              Icons.arrow_forward,
                              size: 40,
                              color: AppColors.textPrimary,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
