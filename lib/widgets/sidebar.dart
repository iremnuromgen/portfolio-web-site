import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';
import 'package:portfolio_site/constants/colors.dart';
import 'dart:ui';

class SideBar extends StatelessWidget {
  SideBar({
    super.key,
    required this.scrollController,
    required this.selectedIndex,
  });

  final ScrollController scrollController;
  final int selectedIndex;

  final List<IconData> icons = [
    LineIcons.home,        
    LineIcons.user,        
    LineIcons.lightbulb,   
    LineIcons.laptop,      
    LineIcons.phone,       
  ];

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final List<double> scrollOffsets = [
      0,
      screenHeight,
      screenHeight * 1.75,
      screenHeight * 2.50,
      screenHeight * 3.50
    ];

    void scrollToSection(int index) {
      scrollController.animateTo(
        scrollOffsets[index],
        duration: const Duration(milliseconds: 500),
        curve: Curves.easeInOut,
      );
    }

    return Positioned(
      left: 10,
      top: (MediaQuery.of(context).size.height - 500) / 2,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 1, sigmaY: 1),
          child: Container(
            width: 60,
            height: 500,
            decoration: BoxDecoration(
              color: Colors.transparent,
              borderRadius: BorderRadius.circular(50),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(icons.length, (index) {
                return IconButton(
                  icon: Icon(
                    icons[index],
                    color: selectedIndex == index ? AppColors.wine : Colors.white,
                  ),
                  onPressed: () => scrollToSection(index),
                );
              }),
            ),
          ),
        ),
      ),
    );
  }
}
