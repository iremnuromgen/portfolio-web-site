import 'package:flutter/material.dart';
import 'package:portfolio_site/animations/particle_animation.dart';
import 'package:portfolio_site/widgets/mobile-widgets/navbar.dart'; // NavBar eklendi
import 'package:portfolio_site/pages/mobile/sections/home_section.dart'; // HomeSection eklendi
import 'package:portfolio_site/pages/mobile/sections/about_section.dart';
import 'package:portfolio_site/pages/mobile/sections/skills_section.dart';
import 'package:portfolio_site/pages/mobile/sections/projects_section.dart';
import 'package:portfolio_site/pages/mobile/sections/contact_section.dart';
import 'package:portfolio_site/pages/mobile/sections/footer_section.dart';

class MobileLayout extends StatefulWidget {
  const MobileLayout({super.key});

  @override
  State<MobileLayout> createState() => _MobileLayoutState();
}

class _MobileLayoutState extends State<MobileLayout> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          Positioned.fill(
            child: ParticleAnimation(),
          ),

          Positioned.fill(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  HomeSection(),
                  AboutSection(),
                  SkillsSection(),
                  ProjectsSection(),
                  ContactSection(),
                  Footer()
                ],
              ),
            ),
          ),

          Positioned(top: 0, left: 0, right: 0, child: NavBar()),
        ],
      ),
    );
  }
}