import 'package:flutter/material.dart';
import 'dart:ui';
import 'package:portfolio_site/constants/about_text.dart';
import 'package:portfolio_site/widgets/gradient_text.dart';
import 'package:portfolio_site/constants/experience_data.dart';
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
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // ABOUT ME KARTI
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.2),
              borderRadius: BorderRadius.circular(20),
            ),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                GradientText(text: "ABOUT ME"),
                SizedBox(height: 10),
                Text(
                  aboutMeText,
                  style: TextStyle(
                    fontSize: 14,
                    fontFamily: 'FiraCode',
                    color: AppColors.textPrimary,
                  ),
                  textAlign: TextAlign.justify,
                ),
              ],
            ),
          ),

          const SizedBox(height: 20),

          // EXPERIENCE KARTI
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.2),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const GradientText(text: "EXPERIENCE"),
                const SizedBox(height: 10),

                // Başlık
                Text(
                  experienceDetails[_currentIndex]['title'],
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    fontFamily: 'FiraCode',
                    color: AppColors.nude,
                  ),
                ),

                const SizedBox(height: 10),

                // Şirket ve tarih
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      experienceDetails[_currentIndex]['company'],
                      style: const TextStyle(
                        fontSize: 12,
                        fontFamily: 'FiraCode',
                        color: AppColors.oatMilk,
                      ),
                    ),
                    Text(
                      experienceDetails[_currentIndex]['date'],
                      style: const TextStyle(
                        fontSize: 12,
                        fontFamily: 'FiraCode',
                        color: AppColors.oatMilk,
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 10),

                // Madde madde görevler
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: experienceDetails[_currentIndex]['tasks']
                      .map<Widget>((task) => Padding(
                            padding: const EdgeInsets.only(bottom: 4),
                            child: Text(
                              "• $task",
                              style: const TextStyle(
                                fontSize: 13,
                                fontFamily: 'FiraCode',
                                color: AppColors.textPrimary,
                              ),
                            ),
                          ))
                      .toList(),
                ),

                const SizedBox(height: 10),

                // Ok simgeleri
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    IconButton(
                      onPressed: _nextExperience,
                      icon: const Icon(
                        Icons.arrow_back,
                        size: 30,
                        color: AppColors.textPrimary,
                      ),
                    ),
                    IconButton(
                      onPressed: _nextExperience,
                      icon: const Icon(
                        Icons.arrow_forward,
                        size: 30,
                        color: AppColors.textPrimary,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
