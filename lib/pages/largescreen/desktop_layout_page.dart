import 'package:flutter/material.dart';
import 'package:portfolio_site/animations/particle_animation.dart'; // YENİ widget eklendi
import 'package:portfolio_site/pages/largescreen/sections/contact_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/footer_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/home_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/about_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/projects_section.dart';
import 'package:portfolio_site/pages/largescreen/sections/skills_section.dart';
import 'package:portfolio_site/widgets/desktop-widgets/navbar.dart';
import 'package:portfolio_site/widgets/desktop-widgets/sidebar.dart';

class DesktopLayout extends StatefulWidget {
  const DesktopLayout({super.key});

  @override
  State<DesktopLayout> createState() => _DesktopLayoutState();
}

class _DesktopLayoutState extends State<DesktopLayout> {
  final ScrollController _scrollController = ScrollController();
  int _selectedIndex = 0;

  void _onScroll() {
    final screenHeight = MediaQuery.of(context).size.height;
    final offset = _scrollController.offset;
    int newIndex = 0;

    if (offset >= screenHeight * 3.5) {
      newIndex = 4;
    } else if (offset >= screenHeight * 2.5) {
      newIndex = 3;
    } else if (offset >= screenHeight * 1.75) {
      newIndex = 2;
    } else if (offset >= screenHeight) {
      newIndex = 1;
    }

    if (newIndex != _selectedIndex) {
      setState(() {
        _selectedIndex = newIndex;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 0, 0, 0),
      body: Stack(
        children: [
          const Positioned.fill(child: ParticleAnimation()),

          //Sayfa içeriği
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              children: [
                SizedBox(height: screenSize.height, child: const HomeSection()),
                SizedBox(height: screenSize.height, child: const AboutSection()),
                SizedBox(height: screenSize.height / 2, child: const SkillsSection()),
                SizedBox(height: screenSize.height, child: const ProjectsSection()),
                SizedBox(height: screenSize.height, child: const ContactSection()),
                Container(
                  color: Colors.black,
                  child: const Footer(),
                ),
              ],
            ),
          ),

          //Navbar ve Sidebar
          const Positioned(top: 0, left: 0, right: 0, child: NavBar()),
          SideBar(scrollController: _scrollController, selectedIndex: _selectedIndex),
        ],
      ),
    );
  }
}