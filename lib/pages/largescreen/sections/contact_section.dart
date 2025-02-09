import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';
import 'package:portfolio_site/widgets/custom_text_field.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio_site/widgets/gradient_text.dart';
import 'package:portfolio_site/services/mail_service.dart'; // MailService'i import et

class ContactSection extends StatefulWidget {
  const ContactSection({super.key});

  @override
  _ContactSectionState createState() => _ContactSectionState();
}

class _ContactSectionState extends State<ContactSection> {
  // Form alanları için controller'lar
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _subjectController = TextEditingController();
  final _messageController = TextEditingController();

  // Form gönderme işlemi
  Future<void> _submitForm() async {
    // Tüm alanlar dolu mu kontrol et
    if (_nameController.text.isEmpty ||
        _emailController.text.isEmpty ||
        _subjectController.text.isEmpty ||
        _messageController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Lütfen tüm alanları doldurun.')),
      );
      return;
    }

    // MailService ile formu gönder
    final isSuccess = await MailService.sendForm(
      name: _nameController.text,
      email: _emailController.text,
      subject: _subjectController.text,
      message: _messageController.text,
    );

    // Gönderim sonucunu kullanıcıya bildir
    if (isSuccess) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Mesajınız başarıyla gönderildi!')),
      );
      // Formu temizle
      _nameController.clear();
      _emailController.clear();
      _subjectController.clear();
      _messageController.clear();
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Mesaj gönderilirken bir hata oluştu.')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          const SizedBox(height: 50),
          const GradientText(text: "CONTACT"),
          const SizedBox(height: 8),
          const Text(
            "You can contact me for collaboration or any questions!",
            style: TextStyle(
              fontFamily: 'FiraCode',
              fontSize: 14,
              color: AppColors.textPrimary,
            ),
            textAlign: TextAlign.center,
          ),
          Padding(
            padding: const EdgeInsets.only(top: 20.0),
            child: Container(
              width: 900,
              height: 450,
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.1),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Padding(
                padding: const EdgeInsets.all(40.0),
                child: Row(
                  children: [
                    // Sol kısım: 200px genişlik
                    Container(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          contactInfo("E-MAIL", "iremnuromgen@gmail.com"),
                          contactInfo("LOCATION", "Istanbul / Türkiye"),
                        ],
                      ),
                    ),
                    const SizedBox(width: 50),
                    // Çizgi
                    Container(width: 2, color: const Color.fromARGB(255, 0, 0, 0)),
                    const SizedBox(width: 50),
                    // Sağ kısım: Kalan alan (820 - 200 = 620px)
                    Expanded(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          CustomTextField(hint: "Name", controller: _nameController),
                          CustomTextField(hint: "E-mail", controller: _emailController),
                          CustomTextField(hint: "Subject", controller: _subjectController),
                          CustomTextField(hint: "Message...", maxLines: 4, controller: _messageController),
                          const SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: _submitForm,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color.fromARGB(173, 116, 28, 40),
                              foregroundColor: AppColors.oatMilk,
                              padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                                side: const BorderSide(color: Color.fromARGB(173, 243, 224, 209)),
                              ),
                            ),
                            child: const Text(
                              "Submit",
                              style: TextStyle(
                                fontFamily: 'FiraCode',
                                color: AppColors.oatMilk,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget contactInfo(String title, String info) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: GoogleFonts.firaCode(color: Colors.white)),
          Text(info, style: GoogleFonts.firaCode(color: Colors.white70)),
        ],
      ),
    );
  }
}