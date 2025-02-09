import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';
import 'package:portfolio_site/animations/particle_animation.dart';
import 'package:portfolio_site/pages/largescreen/sections/about_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/contact_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/footer_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/home_section.dart';
import 'package:portfolio_site/widgets/navbar.dart';
import 'package:portfolio_site/pages/largescreen/sections/projects_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/skills_section.dart';
import 'package:portfolio_site/widgets/sidebar.dart';

class DesktopLayout extends StatefulWidget {
  const DesktopLayout({super.key});

  @override
  State<DesktopLayout> createState() => _DesktopLayoutState();
}

class _DesktopLayoutState extends State<DesktopLayout>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  final List<Particle> _particles = [];
  final ScrollController _scrollController = ScrollController();
  int selectedIndex = 0; // Seçili bölümü takip etmek için

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_updateSelectedIndex);

    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 100),
    )..addListener(() {
        setState(() {
          _particles.forEach((particle) => particle.update(MediaQuery.of(context).size));
        });
      });
    _controller.repeat();
  }

  void _updateSelectedIndex() {
    if (!mounted) return; // Widget ağacından kaldırıldıysa işlemi durdur

    double offset = _scrollController.offset;
    final double screenHeight = MediaQuery.of(context).size.height;

    int newIndex = selectedIndex;
    final List<double> sectionOffsets = [
      0,
      screenHeight,
      screenHeight * 1.75,
      screenHeight * 2.50,
      screenHeight * 3.50
    ];

    for (int i = 0; i < sectionOffsets.length; i++) {
      if (offset >= sectionOffsets[i] - 50 && offset < sectionOffsets[i] + 50) {
        newIndex = i;
        break;
      }
    }

    if (newIndex != selectedIndex) {
      setState(() {
        selectedIndex = newIndex;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;

    if (_particles.isEmpty) {
      for (int i = 0; i < 130; i++) {
        _particles.add(Particle(screenSize));
      }
    }

    return Scaffold(
      body: Stack(
        children: [
          Container(color: AppColors.backgroundPrimary),
          CustomPaint(
            size: Size(screenSize.width, screenSize.height),
            painter: ParticlePainter(_particles),
          ),
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              children: [
                SizedBox(height: screenSize.height, child: const HomeSection()),
                SizedBox(height: screenSize.height, child: const AboutSection()),
                SizedBox(height: screenSize.height/2, child: const SkillsSection()),
                SizedBox(height: screenSize.height, child: const ProjectsSection()),
                SizedBox(height: screenSize.height, child: const ContactSection()),
                const Footer()
              ],
            ),
          ),
          const Positioned(top: 0, left: 0, right: 0, child: NavBar()),
          Align(
            alignment: Alignment.centerLeft,
            child: SideBar(
              scrollController: _scrollController,
              selectedIndex: selectedIndex,
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    _scrollController.dispose();
    super.dispose();
  }
}