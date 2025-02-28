import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';
import 'package:portfolio_site/constants/projects_data.dart';
import 'package:portfolio_site/widgets/gradient_text.dart';

class ProjectsSection extends StatefulWidget {
  const ProjectsSection({super.key});

  @override
  State<ProjectsSection> createState() => _ProjectsSectionState();
}

class _ProjectsSectionState extends State<ProjectsSection> {
  final PageController _pageController = PageController(viewportFraction: 0.8);
  double _currentPage = 0;

  @override
  void initState() {
    super.initState();
    _pageController.addListener(() {
      setState(() {
        _currentPage = _pageController.page!;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: MediaQuery.of(context).size.height,
      color: Colors.transparent,
      child: Stack(
        children: [
          PageView.builder(
            controller: _pageController,
            itemCount: projects.length,
            itemBuilder: (context, index) {
              double scale = (_currentPage - index).abs() < 1 ? 1.0 : 0.8;

              return Center(
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeOut,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                  height: MediaQuery.of(context).size.height * 0.7,
                  width: MediaQuery.of(context).size.width * 0.9,
                  transform: Matrix4.identity()..scale(scale),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                      child: Container(
                        padding: const EdgeInsets.all(20.0),
                        decoration: BoxDecoration(
                          color: const Color.fromARGB(255, 81, 79, 79).withOpacity(0.2),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Column(
                          children: [
                            const SizedBox(height: 20),
                            // Proje Resmi
                            Expanded(
                              flex: 1,
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(20),
                                child: Image.asset(
                                  projects[index].image,
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            const SizedBox(height: 20),
                            // Proje Bilgileri
                            Expanded(
                              flex: 1,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  const SizedBox(height: 10),
                                  Text(
                                    projects[index].title,
                                    style: const TextStyle(
                                      fontSize: 15,
                                      fontWeight: FontWeight.bold,
                                      color: AppColors.textPrimary,
                                      fontFamily: 'FiraCode',
                                    ),
                                  ),
                                  const SizedBox(height: 10),
                                  Text(
                                    projects[index].description,
                                    style: const TextStyle(
                                      fontSize: 13,
                                      color: AppColors.textPrimary,
                                      fontFamily: 'FiraCode',
                                    ),
                                  ),
                                  const SizedBox(height: 40),
                                  // ElevatedButton(
                                  //   onPressed: () {},
                                  //   style: ElevatedButton.styleFrom(
                                  //     backgroundColor: const Color.fromARGB(173, 116, 28, 40),
                                  //     foregroundColor: AppColors.oatMilk,
                                  //     padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                                  //     shape: RoundedRectangleBorder(
                                  //       borderRadius: BorderRadius.circular(12),
                                  //       side: const BorderSide(color: Color.fromARGB(173, 243, 224, 209)),
                                  //     ),
                                  //   ),
                                  //   child: const Text(
                                  //     "Review",
                                  //     style: TextStyle(
                                  //       fontFamily: 'FiraCode',
                                  //       color: AppColors.oatMilk,
                                  //       fontWeight: FontWeight.bold,
                                  //     ),
                                  //   ),
                                  // ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
          const Positioned(
            top: 50,
            left: 0,
            right: 0,
            child: Center(
              child: GradientText(text: "PROJECTS"),
            ),
          ),
        ],
      ),
    );
  }
}