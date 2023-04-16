-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2023 at 03:57 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jehat-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `aboutus`
--

CREATE TABLE `aboutus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `name_ar`, `name_en`, `title_ar`, `title_en`, `desc_ar`, `desc_en`, `image`, `created_at`, `updated_at`) VALUES
(10, 'منصة جهات', 'jehat platform', 'منصة جهات', 'jehat platform', 'نحن نسعى من اجل مواكبة الحداثة والتطور ونشر الثقافة الرقمية , وفى إطار رؤية 2030 ساهمنا بدور فعال فى زيادة الوعي التقنى لدى الجمهور , حيث تُتيح المنصة للجهات فتح مكاتب افتراضية لموظفيها وغرف إجتماعات . كما تُمكن المستفيدين من الوصول للجهات بكل سهولة ويُسر, فى مختلف المجالات نحن نوظف خبراتنا لنؤمن لعملائنا واقعاً ملموسأ يحقق رغابتهم بالنمو والإزدهار المستدام', 'Jandala Group of Companies is one of the companies specialized in information technology and has many other activities. It is considered one of the companies that have played an effective role in achieving Vision 2030 and increasing the technical awareness of the public. Over the course of more than ten years, it has implemented many technical projects. In various fields, we employ our expertise to ensure our customers a tangible reality that fulfills their desire for sustainable growth and prosperity.', '2023012206211m.png', '2023-01-22 03:21:49', '2023-01-22 04:31:46'),
(11, 'أهدافنا', 'goals', 'هكذا نحقق أهدافنا', 'This is how we achieve our goals', '<p>أن تكون المنصة واجهة استرشادية موحده لكافة المعاملات في كافة القطاعات</p>', 'The platform should be a unified guiding interface for all transactions in all sectors', '20230122083618.png', '2023-01-22 05:36:26', '2023-01-22 05:36:26'),
(12, 'رسالتنا', 'message', 'تلك هى رسالتنا', 'That is our message', '<p>تقديم المعلومة الدقيقة للجمهور وزيادة الوعي الإرشادي لكافة الجهات بشكل عام</p>', 'Providing accurate information to the public Increasing awareness of guidance for all parties in general', '20230122083719.png', '2023-01-22 05:37:44', '2023-01-22 05:37:44'),
(13, 'رؤيتنا الإستراتيجية', 'vision', 'رؤيتنا الإستراتيجية', 'Our strategic vision', 'أن تصبح منصة \"جهات\" هي القناة الأكثر استخداماً من قبل المستفيدين والجهات', 'For the \"jehat\" platform to become the most used channel by beneficiaries and authorities', '20230122083920.png', '2023-01-22 05:39:10', '2023-01-22 06:43:04'),
(14, 'سعد عبدالله المحسن', 'Saad Abdullah Al-Mohsen', 'رئيس مجلس الإدارة', 'Chairman of Board of Directors', '<p>توقيع&nbsp;</p>', 'v', '202301220932sing.png', '2023-01-22 06:32:54', '2023-01-22 06:32:54');

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `user_name`, `activity`, `created_at`, `updated_at`) VALUES
(1, '1', 'Admin', 'تم اضافه اسئله شائعه جديده', '2022-10-31 06:24:16', '2022-10-31 06:24:16'),
(2, '1', 'Admin', 'تم تعديل  اسئله شائعه', '2022-10-31 06:31:17', '2022-10-31 06:31:17'),
(3, '1', 'Admin', 'تم اضافه قسم جديده', '2022-11-09 08:42:07', '2022-11-09 08:42:07'),
(4, '1', 'Admin', 'تم اضافه قسم جديده', '2022-11-10 07:25:50', '2022-11-10 07:25:50'),
(5, '1', 'Admin', 'تم اضافه قسم جديده', '2022-11-10 07:26:00', '2022-11-10 07:26:00'),
(6, '1', 'Admin', 'تم اضافه قسم جديده', '2022-11-10 07:26:15', '2022-11-10 07:26:15'),
(7, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-20 09:47:04', '2022-12-20 09:47:04'),
(8, '1', 'Admin', 'تم تعديل قسم جديده', '2022-12-20 09:54:26', '2022-12-20 09:54:26'),
(9, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 06:47:40', '2022-12-25 06:47:40'),
(10, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 06:48:36', '2022-12-25 06:48:36'),
(11, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 06:49:18', '2022-12-25 06:49:18'),
(12, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 06:50:47', '2022-12-25 06:50:47'),
(13, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 06:51:29', '2022-12-25 06:51:29'),
(14, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:07:48', '2022-12-25 07:07:48'),
(15, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:08:31', '2022-12-25 07:08:31'),
(16, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:10:10', '2022-12-25 07:10:10'),
(17, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:11:12', '2022-12-25 07:11:12'),
(18, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:11:55', '2022-12-25 07:11:55'),
(19, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:12:28', '2022-12-25 07:12:28'),
(20, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:12:59', '2022-12-25 07:12:59'),
(21, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:13:14', '2022-12-25 07:13:14'),
(22, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:13:27', '2022-12-25 07:13:27'),
(23, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:13:40', '2022-12-25 07:13:40'),
(24, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 07:14:00', '2022-12-25 07:14:00'),
(25, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 08:13:28', '2022-12-25 08:13:28'),
(26, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 08:42:37', '2022-12-25 08:42:37'),
(27, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 09:05:46', '2022-12-25 09:05:46'),
(28, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 09:28:57', '2022-12-25 09:28:57'),
(29, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 09:34:05', '2022-12-25 09:34:05'),
(30, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 09:34:37', '2022-12-25 09:34:37'),
(31, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 10:07:21', '2022-12-25 10:07:21'),
(32, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 10:07:57', '2022-12-25 10:07:57'),
(33, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 10:14:41', '2022-12-25 10:14:41'),
(34, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 10:15:34', '2022-12-25 10:15:34'),
(35, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 10:16:16', '2022-12-25 10:16:16'),
(36, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 10:16:54', '2022-12-25 10:16:54'),
(37, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:25:48', '2022-12-25 13:25:48'),
(38, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:26:17', '2022-12-25 13:26:17'),
(39, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:26:44', '2022-12-25 13:26:44'),
(40, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:27:17', '2022-12-25 13:27:17'),
(41, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:27:41', '2022-12-25 13:27:41'),
(42, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:29:32', '2022-12-25 13:29:32'),
(43, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-25 13:30:00', '2022-12-25 13:30:00'),
(44, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:49:11', '2022-12-26 09:49:11'),
(45, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:49:56', '2022-12-26 09:49:56'),
(46, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:53:12', '2022-12-26 09:53:12'),
(47, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:54:04', '2022-12-26 09:54:04'),
(48, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:54:39', '2022-12-26 09:54:39'),
(49, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:55:10', '2022-12-26 09:55:10'),
(50, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:55:37', '2022-12-26 09:55:37'),
(51, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:56:00', '2022-12-26 09:56:00'),
(52, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:56:30', '2022-12-26 09:56:30'),
(53, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:57:24', '2022-12-26 09:57:24'),
(54, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:57:44', '2022-12-26 09:57:44'),
(55, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:58:15', '2022-12-26 09:58:15'),
(56, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:58:52', '2022-12-26 09:58:52'),
(57, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:59:13', '2022-12-26 09:59:13'),
(58, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 09:59:40', '2022-12-26 09:59:40'),
(59, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:00:05', '2022-12-26 10:00:05'),
(60, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:00:33', '2022-12-26 10:00:33'),
(61, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:01:01', '2022-12-26 10:01:01'),
(62, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:01:52', '2022-12-26 10:01:52'),
(63, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:02:17', '2022-12-26 10:02:17'),
(64, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:02:39', '2022-12-26 10:02:39'),
(65, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:13:56', '2022-12-26 10:13:56'),
(66, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:14:22', '2022-12-26 10:14:22'),
(67, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:14:50', '2022-12-26 10:14:50'),
(68, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-26 10:15:31', '2022-12-26 10:15:31'),
(69, '1', 'Admin', 'تم اضافه قسم جديده', '2022-12-27 06:41:49', '2022-12-27 06:41:49');

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `slug`, `name_ar`, `name_en`, `desc_ar`, `desc_en`, `image`, `link`, `created_at`, `updated_at`) VALUES
(1, NULL, 'المكاتب الافتراضيه', 'المكاتب الافتراضيه', 'يتم عرض جميع الشركات الموجوده فى المنصه وكذلك الاقسام الخاصه بها وايضا', 'يتم عرض جميع الشركات الموجوده فى المنصه وكذلك الاقسام الخاصه بها وايضا', '202301241211icons8-office-100.png', 'http://localhost/jehat-test/allCompanies/shrkh-gdydh-lltgrbh', '2023-01-24 10:11:37', '2023-01-24 10:11:37'),
(2, NULL, 'مكتبى', 'مكتبى', 'عرض جميع المعارض الموجود فى المنصه وتفاصيل كل معرض', 'عرض جميع المعارض الموجود فى المنصه وتفاصيل كل معرض', '202301241212icons8-office-1001.png', 'https://app.jehat.sa/client_login', '2023-01-24 10:12:52', '2023-01-24 10:12:52'),
(3, NULL, 'صفحه جديده للتجربه', 'test', 'سسسسسسسسسسسس', 'سسسسسسسسسسسسسسسس', '202302191112WhatsApp Image 2022-12-06 at 7.44.34 PM.jpeg', '#', '2023-02-19 09:12:08', '2023-02-19 09:12:08'),
(4, 'tgrbh', 'تجربه', 'تجربه', 'تجربه', 'تجربه', '202304161137screencapture-2-timedoctor-dashboard-individual-user-ZBqrbmwDWsAn-vHf-2023-04-15-14_37_22.png', '#', '2023-04-16 09:37:22', '2023-04-16 09:37:22');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name_ar`, `name_en`, `parent_id`, `created_at`, `updated_at`) VALUES
(27, 'منصة المستفيد', NULL, 0, '2022-10-25 11:16:47', '2022-10-27 08:50:17'),
(28, 'طلباتي', NULL, 27, '2022-10-25 11:17:51', '2022-10-25 11:17:51'),
(29, 'منصة الموظف', NULL, 0, '2022-10-25 11:18:41', '2022-10-27 08:51:02'),
(30, 'الاجتماعات', NULL, 29, '2022-10-25 11:19:01', '2022-10-25 11:19:01'),
(31, 'اضافة اجتماع', NULL, 30, '2022-10-25 11:19:21', '2022-10-25 11:19:21'),
(32, 'خطاباتي', NULL, 27, '2022-10-25 11:27:05', '2022-10-25 11:27:05'),
(33, 'شرح خطاباتي', NULL, 32, '2022-10-25 11:27:37', '2022-10-25 11:27:37'),
(34, 'إضافة خطاب', NULL, 32, '2022-10-25 11:27:58', '2022-10-25 11:27:58'),
(35, 'المفوضين', NULL, 27, '2022-10-25 11:28:36', '2022-10-25 11:28:36'),
(36, 'شرح المفوضين', NULL, 35, '2022-10-25 11:28:58', '2022-10-25 11:28:58'),
(37, 'إضافة مفوض', NULL, 35, '2022-10-25 11:29:18', '2022-10-25 11:29:18'),
(38, 'إنشاء جهة', NULL, 27, '2022-10-25 11:30:11', '2022-10-25 11:30:11'),
(39, 'شرح إنشاء جهة', NULL, 38, '2022-10-25 11:30:29', '2022-10-25 11:30:29'),
(40, 'مواعيدي', NULL, 27, '2022-10-25 11:30:48', '2022-10-25 11:30:48'),
(41, 'شرح مواعيدي', NULL, 40, '2022-10-25 11:33:07', '2022-10-25 11:33:07'),
(42, 'إضافة موعد', NULL, 40, '2022-10-25 11:33:39', '2022-10-25 11:33:39'),
(43, 'البيانات الشخصية', NULL, 27, '2022-10-25 11:39:59', '2022-10-25 11:39:59'),
(44, 'عرض البيانات الشخصية', NULL, 43, '2022-10-25 11:41:39', '2022-10-25 11:41:39'),
(45, 'عرض طلباتي', NULL, 28, '2022-10-25 11:42:58', '2022-10-25 11:42:58'),
(46, 'إضافة طلب', NULL, 28, '2022-10-25 11:43:20', '2022-10-25 11:43:20'),
(47, 'اجتماعاتي', NULL, 27, '2022-10-25 11:43:46', '2022-10-25 11:43:46'),
(48, 'حضور الاجتماع', NULL, 47, '2022-10-25 11:44:21', '2022-10-25 11:44:21'),
(49, 'المستندات', NULL, 27, '2022-10-25 11:45:31', '2022-10-25 11:45:31'),
(50, 'شرح إضافة مستند', NULL, 49, '2022-10-25 11:45:55', '2022-10-25 11:45:55'),
(51, 'خطابات واردة بغرض الاعتماد', NULL, 27, '2022-10-25 11:46:19', '2022-10-26 07:27:23'),
(52, 'معرفة حالة الخطابات الواردة', NULL, 51, '2022-10-25 11:46:43', '2022-10-25 11:46:43'),
(54, 'خطابات', NULL, 29, '2022-10-27 08:54:05', '2022-10-27 08:54:05'),
(55, 'اضافة خطاب', NULL, 54, '2022-10-27 08:56:49', '2022-10-27 08:56:49'),
(56, 'خطاباتى', NULL, 54, '2022-10-27 08:57:35', '2022-10-27 08:57:35'),
(57, 'كل خطابات الموظفين', NULL, 54, '2022-10-27 08:58:25', '2022-10-27 08:58:25'),
(58, 'خطابات واردة بغرض التصديق', NULL, 54, '2022-10-27 08:59:00', '2022-10-27 08:59:00'),
(59, 'خطابات وارده بغرض الاعتماد', NULL, 54, '2022-10-27 08:59:35', '2022-10-27 08:59:35'),
(60, 'اعدادات', NULL, 29, '2022-10-27 09:00:05', '2022-10-27 09:00:05'),
(61, 'الجهات', NULL, 60, '2022-10-27 09:00:49', '2022-10-27 09:00:49'),
(62, 'أنواع المعاملات', NULL, 60, '2022-10-27 09:01:05', '2022-10-27 09:01:05'),
(63, 'المستفيدين', NULL, 29, '2022-10-27 09:01:38', '2022-10-27 09:01:38'),
(64, 'عرض المستفيدين', NULL, 63, '2022-10-27 09:02:56', '2022-10-27 09:03:57'),
(65, 'تقرير تسجيل المستفيدين', NULL, 63, '2022-10-27 09:03:30', '2022-10-27 09:03:30'),
(66, 'احصائيات', NULL, 29, '2022-10-27 09:24:02', '2022-10-27 09:24:02'),
(67, 'احصائيات عامة', NULL, 66, '2022-10-27 09:24:45', '2022-10-27 09:24:45'),
(70, 'معاملات', NULL, 29, '2022-10-27 09:30:36', '2022-10-27 09:30:36'),
(71, 'اضافة طلب', NULL, 70, '2022-10-27 09:31:00', '2022-10-27 09:31:00'),
(72, 'المعاملات', NULL, 70, '2022-10-27 09:31:18', '2022-10-27 09:31:18'),
(73, 'طلب تاجيل المعاملات', NULL, 70, '2022-10-27 09:31:44', '2022-10-27 09:31:44'),
(74, 'مراجعة  معاملات موظف', NULL, 70, '2022-10-27 09:32:03', '2022-10-27 09:32:03'),
(75, 'معاملات لفت النظر', NULL, 70, '2022-10-27 09:32:21', '2022-10-27 09:32:21'),
(76, 'معاملات منجزة', NULL, 70, '2022-10-27 09:32:41', '2022-10-27 09:32:41'),
(77, 'نقل المعاملات', NULL, 70, '2022-10-27 09:32:59', '2022-10-27 09:32:59'),
(78, 'الفواتير', NULL, 29, '2022-10-27 09:42:22', '2022-10-27 09:42:22'),
(79, 'إضافة فاتورة مبيعات', NULL, 78, '2022-10-27 09:42:44', '2022-10-27 09:42:44'),
(80, 'فواتيري', NULL, 78, '2022-10-27 09:43:00', '2022-10-27 09:43:00'),
(81, 'كل فواتير الموظفين', NULL, 78, '2022-10-27 09:43:32', '2022-10-27 09:43:32'),
(82, 'الأصناف', NULL, 78, '2022-10-27 09:43:53', '2022-10-27 09:43:53'),
(83, 'التقييم', NULL, 29, '2022-10-27 09:44:41', '2022-10-27 09:44:41'),
(84, 'إعدادات تقييم الموظفين', NULL, 83, '2022-10-27 09:45:11', '2022-10-27 09:45:11'),
(85, 'عرض تقييم الموظفين', NULL, 83, '2022-10-27 09:45:36', '2022-10-27 09:45:36'),
(86, 'المفكرة', NULL, 29, '2022-10-27 09:45:59', '2022-10-27 09:45:59'),
(87, 'اضافة موعد', NULL, 86, '2022-10-27 09:46:37', '2022-10-27 09:46:37'),
(88, 'عرض مواعيدي', NULL, 86, '2022-10-27 09:47:20', '2022-10-27 09:47:20'),
(89, 'مراجعة مواعيد موظف', NULL, 86, '2022-10-27 09:47:55', '2022-10-27 09:47:55'),
(90, 'العملاء والاقسام', NULL, 29, '2022-10-27 09:52:03', '2022-10-27 09:52:03'),
(91, 'اضافة عميل او قسم داخلي', NULL, 90, '2022-10-27 09:52:21', '2022-10-27 09:52:21'),
(92, 'العملاء والاقسام الداخلية', NULL, 90, '2022-10-27 09:53:37', '2022-10-27 09:53:37'),
(93, 'المرفقات', NULL, 90, '2022-10-27 09:53:55', '2022-10-27 09:53:55'),
(94, 'اجتماعات', NULL, 29, '2022-10-27 09:54:13', '2022-10-27 09:54:13'),
(95, 'اضافة الاجتماع', NULL, 94, '2022-10-27 09:55:04', '2022-10-27 09:55:04'),
(96, 'كل الاجتماعات', NULL, 94, '2022-10-27 09:55:23', '2022-10-27 09:55:23'),
(97, 'الموظفين', NULL, 29, '2022-10-27 09:55:43', '2022-10-27 09:55:43'),
(98, 'اضافة موظف', NULL, 97, '2022-10-27 09:56:09', '2022-10-27 09:56:09'),
(99, 'موظفين', NULL, 97, '2022-10-27 09:56:59', '2022-10-27 09:56:59'),
(100, 'سجل الموظف', NULL, 97, '2022-10-27 09:57:22', '2022-10-27 09:57:22'),
(103, 'إضافة المستفيدين', NULL, 63, '2022-11-01 10:06:51', '2022-11-01 10:06:51'),
(104, 'طلبات الجهات المعلقة', NULL, 97, '2022-11-01 10:09:51', '2022-11-01 10:09:51'),
(105, 'موظفي الجهات', NULL, 97, '2022-11-01 10:11:22', '2022-11-01 10:11:22'),
(106, 'مجموعات الموظفين', NULL, 97, '2022-11-01 10:13:01', '2022-11-01 10:13:01'),
(107, 'اعدادات البريد الإلكتروني', NULL, 60, '2022-11-01 10:15:16', '2022-11-01 10:15:16'),
(108, 'الحد الأقصى للمعاملات', NULL, 60, '2022-11-01 10:16:54', '2022-11-01 10:16:54'),
(109, 'الحالة', NULL, 60, '2022-11-01 10:18:29', '2022-11-01 10:18:29'),
(110, 'الرعاة', NULL, 60, '2022-11-01 10:19:47', '2022-11-01 10:19:47'),
(111, 'تقرير الجهات', NULL, 60, '2022-11-01 10:21:39', '2022-11-01 10:21:39'),
(112, 'المستفيد الافتراضي لإضافة معاملة', NULL, 60, '2022-11-01 10:24:22', '2022-11-01 10:24:22'),
(113, 'اعدادات النظام', NULL, 60, '2022-11-01 10:26:27', '2022-11-01 10:26:27'),
(114, 'الصلاحيات', NULL, 29, '2022-11-02 06:59:57', '2022-11-02 06:59:57'),
(115, 'صلاحيات القوائم', NULL, 114, '2022-11-02 07:00:41', '2022-11-02 07:00:41'),
(116, 'صلاحيات الكنترول', NULL, 114, '2022-11-02 07:01:14', '2022-11-02 07:01:14');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `card_slug` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reception_link` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `card_slug`, `name_ar`, `name_en`, `image`, `reception_link`, `slug`, `created_at`, `updated_at`) VALUES
(13, NULL, 'شركه جديده للتجربه', 'شركه جديده للتجربه', '202302191732202211092143logo.png', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'shrkh-gdydh-lltgrbh', '2023-01-24 10:18:50', '2023-02-19 15:32:50'),
(14, NULL, 'شركه جديده للتجربه', 'test', '202302191733202211200910logo-5.png', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'shrkh-gdydh-lltgrbh', '2023-02-19 15:33:21', '2023-02-19 15:33:21'),
(15, NULL, 'شركه جديده للتجربه', 'test', '202302191733202211200911logo.png', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'shrkh-gdydh-lltgrbh', '2023-02-19 15:33:47', '2023-02-19 15:33:47');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `map` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name_ar`, `name_en`, `desc_ar`, `desc_en`, `address_ar`, `address_en`, `email`, `number`, `map`, `link`, `created_at`, `updated_at`) VALUES
(1, 'السعودية الرياض', 'Al Riyadh, Saudi Arabia', 'كما يسعدنا تلقي استفساراتكم', 'We are also pleased to receive your inquiries via e-mail', 'مخرج 24', 'Exit 24', 'info@jehat.sa', '+966553777769', 'm', 'm', '2023-01-23 07:17:32', '2023-01-23 07:52:24');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `company_id`, `name_ar`, `name_en`, `created_at`, `updated_at`) VALUES
(1, '1', 'it', 'cat1', '2022-11-09 08:42:07', '2022-11-09 08:42:07'),
(2, '1', 'hr', 'قفقف', '2022-11-10 07:25:50', '2022-11-10 07:25:50'),
(3, '1', 'Account', 'قثفثفق', '2022-11-10 07:26:00', '2022-11-10 07:26:00'),
(4, '1', 'Mangers', 'اتالتبلالتلات', '2022-11-10 07:26:15', '2022-11-10 07:26:15'),
(5, '2', 'قسم البرمجه', 'It Team', '2022-12-20 09:47:04', '2022-12-20 09:54:26'),
(6, '1', 'مراقب عام', 'general Monitor', '2022-12-25 06:47:40', '2022-12-25 06:47:40'),
(7, '1', 'المدير المالي للمجموعة', 'Group Chief Financial Officer', '2022-12-25 06:48:36', '2022-12-25 06:48:36'),
(8, '1', 'مدير المراجعة والرقابة المالية', 'Director of Audit and Financial Control', '2022-12-25 06:49:18', '2022-12-25 06:49:18'),
(9, '1', 'السكرتير المالي للمجموعة', 'Group financial secretary', '2022-12-25 06:50:47', '2022-12-25 06:50:47'),
(10, '1', 'مديرة التطوير لمنصة جهات', 'Development Manager for the Jehat platform', '2022-12-25 06:51:29', '2022-12-25 06:51:29'),
(11, '4', 'المدير التنفيـــذي', 'Executive Director', '2022-12-25 07:07:48', '2022-12-25 07:07:48'),
(12, '4', 'نائب المدير التنفيذي للخدمات العامه', 'Deputy Executive Director of General Services', '2022-12-25 07:08:31', '2022-12-25 07:08:31'),
(13, '4', 'مدير الدعـم الفنـي', 'Technical support manager', '2022-12-25 07:10:10', '2022-12-25 07:10:10'),
(14, '4', 'نائب مدير الدعم الفنى', 'Deputy Director of Technical Support', '2022-12-25 07:11:12', '2022-12-25 07:11:12'),
(15, '4', 'مسئول دعـم فنـي', 'Technical support officer', '2022-12-25 07:11:55', '2022-12-25 07:11:55'),
(16, '4', 'معقب', 'Expeditor', '2022-12-25 07:12:28', '2022-12-25 07:12:28'),
(17, '0', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 07:12:59', '2022-12-25 07:12:59'),
(18, '0', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 07:13:14', '2022-12-25 07:13:14'),
(19, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 07:13:27', '2022-12-25 07:13:27'),
(20, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 07:13:40', '2022-12-25 07:13:40'),
(21, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 07:14:00', '2022-12-25 07:14:00'),
(22, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 08:13:28', '2022-12-25 08:13:28'),
(23, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 08:42:37', '2022-12-25 08:42:37'),
(24, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 09:05:46', '2022-12-25 09:05:46'),
(25, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 09:28:57', '2022-12-25 09:28:57'),
(26, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 09:34:05', '2022-12-25 09:34:05'),
(27, '4', 'مسئول علاقات عامه', 'Public relations officer', '2022-12-25 09:34:37', '2022-12-25 09:34:37'),
(28, '4', 'تجربه جديده', 'test', '2022-12-25 10:07:21', '2022-12-25 10:07:21'),
(29, '2', 'صفحه جديده للتجربه', 'test', '2022-12-25 10:07:57', '2022-12-25 10:07:57'),
(30, '4', 'نائب المدير التنفيذي للخدمات الماليه', 'Executive Vice President of Financial Services', '2022-12-25 10:14:41', '2022-12-25 10:14:41'),
(31, '4', 'محاسب الزكاة والضريبة', 'Zakat and tax accountant', '2022-12-25 10:15:34', '2022-12-25 10:15:34'),
(32, '4', 'رئيس الحسابــات', 'Head of accounts', '2022-12-25 10:16:16', '2022-12-25 10:16:16'),
(33, '4', 'محاسب', 'Accountant', '2022-12-25 10:16:54', '2022-12-25 10:16:54'),
(34, '6', 'مدير العمليات', 'actions Director', '2022-12-25 13:25:48', '2022-12-25 13:25:48'),
(35, '6', 'دعم لوجستي', 'Logistical support', '2022-12-25 13:26:17', '2022-12-25 13:26:17'),
(36, '6', 'مساعد إداري', 'manager assistant', '2022-12-25 13:26:44', '2022-12-25 13:26:44'),
(37, '6', 'امين المستودع', 'Storekeeper', '2022-12-25 13:27:17', '2022-12-25 13:27:17'),
(38, '6', 'مندوب مشتريات', 'Purchases Representative', '2022-12-25 13:27:41', '2022-12-25 13:27:41'),
(39, '6', 'المديـر التنفيذي', 'Executive Director', '2022-12-25 13:29:32', '2022-12-25 13:29:32'),
(40, '6', 'محاسب', 'Accountant', '2022-12-25 13:30:00', '2022-12-25 13:30:00'),
(41, '7', 'مدير إدارة تكنولوجيا المعلومات', 'Director of Information Technology Department', '2022-12-26 09:49:11', '2022-12-26 09:49:11'),
(42, '7', 'مستشار تقني', 'Technical advisor', '2022-12-26 09:49:56', '2022-12-26 09:49:56'),
(43, '8', 'مسئولة موارد بشرية', 'Human Resources Responsible', '2022-12-26 09:53:12', '2022-12-26 09:53:12'),
(44, '8', 'مسئولة موارد بشرية وسكرتيرة مكتب رئيس مجلس الإدارة', 'Human Resources Officer and Secretary of the Office of the Chairman of the Board of Directors', '2022-12-26 09:54:04', '2022-12-26 09:54:04'),
(45, '8', ' مسئولة التدريب', 'Training officer', '2022-12-26 09:54:39', '2022-12-26 09:54:39'),
(46, '9', 'مسئول الشئون القانونية', 'Legal Affairs Officer', '2022-12-26 09:55:10', '2022-12-26 09:55:10'),
(47, '9', 'مستشار قانوني', 'Counsel', '2022-12-26 09:55:37', '2022-12-26 09:55:37'),
(48, '9', 'مدير إدارة الشئون القانونية', 'Director of the Legal Affairs Department', '2022-12-26 09:56:00', '2022-12-26 09:56:00'),
(49, '10', 'محاسب', 'Accountant', '2022-12-26 09:56:30', '2022-12-26 09:56:30'),
(50, '11', 'المدير التنفيـــذي', 'Executive Director', '2022-12-26 09:57:24', '2022-12-26 09:57:24'),
(51, '11', 'مسئول عــام', 'Public official', '2022-12-26 09:57:44', '2022-12-26 09:57:44'),
(52, '11', 'مطورة برامج', 'Software developer', '2022-12-26 09:58:15', '2022-12-26 09:58:15'),
(53, '11', 'مسئولة دعم تقنى', 'Technical support officer', '2022-12-26 09:58:52', '2022-12-26 09:58:52'),
(54, '11', 'مسئولة تسويق', 'Marketing officer', '2022-12-26 09:59:13', '2022-12-26 09:59:13'),
(55, '11', 'مصمم جرافيك', 'Graphic designer', '2022-12-26 09:59:40', '2022-12-26 09:59:40'),
(56, '11', 'موشن جرافيك', 'Motion Graphic', '2022-12-26 10:00:05', '2022-12-26 10:00:05'),
(57, '11', 'كاتبه محتوى', 'Content writer', '2022-12-26 10:00:33', '2022-12-26 10:00:33'),
(58, '11', 'مسئول الإعلانات الممؤلة', 'Advertisement Responsible', '2022-12-26 10:01:01', '2022-12-26 10:01:01'),
(59, '12', 'المدير التنفيـــذي', 'Executive Director', '2022-12-26 10:01:52', '2022-12-26 10:01:52'),
(60, '12', 'مدير المصانع', 'Factory manager', '2022-12-26 10:02:17', '2022-12-26 10:02:17'),
(61, '12', 'رئيس الحسابـات', 'Head of accounts', '2022-12-26 10:02:39', '2022-12-26 10:02:39'),
(62, '12', 'محاسب', 'Accountant', '2022-12-26 10:13:56', '2022-12-26 10:13:56'),
(63, '12', 'مسئول مشتريات', 'Officer purchases', '2022-12-26 10:14:22', '2022-12-26 10:14:22'),
(64, '12', 'خبير تعاوني', 'Collaborative expert', '2022-12-26 10:14:50', '2022-12-26 10:14:50'),
(65, '12', 'سكرتيرة الجمعية', 'Association secretary', '2022-12-26 10:15:31', '2022-12-26 10:15:31'),
(66, '2', 'الموظفين', 'test', '2022-12-27 06:41:49', '2022-12-27 06:41:49');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meeting_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `whats_app` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `company_id`, `department_id`, `event_id`, `name`, `position`, `meeting_link`, `email`, `whats_app`, `image`, `created_at`, `updated_at`) VALUES
(1, '13', 1, 1, 'احمد على محمود', 'مقيم عقارى', 'https://app.jndlh.com.sa/jan-cgv-bbx-4bp', 'ahmed@ex.com', '112845789', '202211101248card.png', '2022-11-10 10:45:23', '2022-11-20 07:24:30'),
(2, '14', 5, 0, 'مروه السيد فرج الغريب', 'تكنولوجيا المعلومات', 'https://app.jndlh.com.sa/jan-j9d-ale-slx', 'marwa.elghareeb@jehat.sa', '201146122539', '202211101246card.jpeg', '2022-11-10 10:46:21', '2022-12-20 09:53:16'),
(3, '15', 4, 0, 'سعـد عبدالله المحسـن', 'رئيـس مجلـس الادارة للمجموعه', 'https://app.jndlh.com.sa/jan-cok-8ek-hzn', 'saad@jandalah.com.sa', '966553777769', '2022122506418-2.jpg', '2022-12-25 06:41:20', '2022-12-25 06:41:20'),
(4, '1', 6, 0, 'عبدالله المحسن', 'مراقب عام', 'https://app.jndlh.com.sa/jan-cok-8ek-hzn', 'Abdullh@gmt.sa', '966504216851', '2022122506558-2.jpg', '2022-12-25 06:55:55', '2022-12-25 06:55:55'),
(5, '13', 7, 0, 'مصطفى الشناوي', 'المدير المالي للمجموعة', 'https://app.jndlh.com.sa/jan-cok-8ek-hzn', 'm.alshnawy@jandalah.com.sa', '201020205272', '2022122506578-2.jpg', '2022-12-25 06:57:42', '2023-02-19 15:36:25'),
(6, '14', 8, 0, 'محرم السيد', 'مدير المراجعة والرقابة المالية', 'https://app.jndlh.com.sa/jan-cok-8ek-hzn', 'mohram@jandalah.com.sa', '201020156342', '2022122506598-2.jpg', '2022-12-25 06:59:28', '2022-12-25 06:59:28'),
(7, '15', 9, 0, 'محمد خالد', 'السكرتير المالي للمجموعة', 'https://app.jndlh.com.sa/jan-cok-8ek-hzn', 'm.khaled@jandalah.com.sa', '966559956606', '2022122507038-2.jpg', '2022-12-25 07:03:04', '2022-12-25 07:03:04'),
(8, '1', 10, 0, 'غدير المحسن', 'مديرة التطوير لمنصة جهات', 'https://app.jndlh.com.sa/jan-ekl-zph-muh', 'team@jandalah.com.sa', '966509937995', '2022122507058-2.jpg', '2022-12-25 07:05:25', '2022-12-25 07:05:25'),
(9, '4', 11, 0, 'عبدالرحمن المحسن', 'المدير التنفيذي', 'https://app.jndlh.com.sa/jan-sud-cqi-y4p', 'abd@jandalah.com.sa', '966552488800', '2022122510218-2.jpg', '2022-12-25 10:21:20', '2022-12-25 10:21:20'),
(10, '4', 12, 0, 'رجـب عبدالباقـى', 'نائب المدير التنفيذي للخدمات العامه', 'https://app.jndlh.com.sa/jan-tfx-dnu-ils', 'ragab@jandalah.com.sa', '966509988137', '2022122510438-2.jpg', '2022-12-25 10:43:29', '2022-12-25 10:43:29'),
(11, '4', 13, 0, 'عمـرو بـدر', 'مدير الدعم الفني', 'https://app.jndlh.com.sa/jan-xu7-2ol-cky', 'amr.badr@jandalah.com.sa', '966504912237', '2022122510498-2.jpg', '2022-12-25 10:49:26', '2022-12-25 10:49:26'),
(12, '4', 14, 0, 'أحمـد منيـر', 'نائب مدير الدعم الفنى', 'https://app.jndlh.com.sa/jan-k2z-2ti-sws', 'a.mouner@jandalah.com.sa', '966505143329', '2022122511278-2.jpg', '2022-12-25 11:27:37', '2022-12-25 11:27:37'),
(13, '4', 16, 0, 'فيصل فيـاض', 'معقب', 'https://app.jndlh.com.sa/jan-v6a-chj-ht0', 'faisal.faiad@jandalah.com.sa', '966558854779', '2022122511298-2.jpg', '2022-12-25 11:29:50', '2022-12-25 11:29:50'),
(14, '4', 15, 0, 'أحمد صابر', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-ule-0vp-dzi', 'a.saber@jandalah.com.sa', '966559484228', '2022122511368-2.jpg', '2022-12-25 11:36:52', '2022-12-25 11:36:52'),
(15, '4', 15, 0, 'أحمد طلحه', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-4or-9zz-z68', 'a.talha@jandalah.com.sa', '966509988016', '2022122511398-2.jpg', '2022-12-25 11:39:10', '2022-12-25 11:39:10'),
(16, '4', 15, 0, 'أحمد عزب', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-ked-sis-mkn', 'ex@ex.com', '966505533251', '2022122511418-2.jpg', '2022-12-25 11:41:39', '2022-12-25 11:41:39'),
(17, '4', 15, 0, 'أحمـد عبدالباسـط', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-f7s-g9m-yro', 'a.abdelbast@jandalah.com.sa', '966505533202', '2022122511428-2.jpg', '2022-12-25 11:42:56', '2022-12-25 11:42:56'),
(18, '4', 15, 0, 'رضا عبدالباقي', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-gcj-djg-dn3', 'reda@jandalah.com.sa', '966533396244', '2022122511448-2.jpg', '2022-12-25 11:44:23', '2022-12-25 11:44:23'),
(19, '4', 15, 0, 'زكريـا صبري', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-hv5-hoh-pae', 'zakaria@jandalah.com.sa', '966509920698', '2022122511468-2.jpg', '2022-12-25 11:46:48', '2022-12-25 11:46:48'),
(20, '4', 15, 0, 'عبدالمنعـم سامـي', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-iqc-qij-whk', 'abdlmonem@jandalah.com.sa', '966555486512', '2022122511488-2.jpg', '2022-12-25 11:48:22', '2022-12-25 11:48:22'),
(21, '4', 15, 0, 'محمـد زايـد', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-aow-lc3-2ik', 'm.zayed@jandalah.com.sa', '966505145256', '2022122511508-2.jpg', '2022-12-25 11:50:04', '2022-12-25 11:50:04'),
(22, '4', 15, 0, 'محمد نصار', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-ziw-ufl-z7u', 'm.nasar@jandalah.com.sa', '966533389447', '2022122511528-2.jpg', '2022-12-25 11:52:22', '2022-12-25 11:52:22'),
(23, '4', 15, 0, 'احمد رمزي عبدالحميد سعد', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-lij-jza-rig', 'a.ramzy@jandalah.com.sa', '966504912565', '2022122511548-2.jpg', '2022-12-25 11:54:20', '2022-12-25 11:54:20'),
(24, '4', 15, 0, 'عبدالله صبحي', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-qka-xsb-5yi', 'abd.sobhy@jandalah.com.sa', '966533387144', '2022122512558-2.jpg', '2022-12-25 12:55:24', '2022-12-25 12:55:24'),
(25, '4', 15, 0, 'محمد صابر', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-fa5-6tm-w9o', 'm.saber@jandalah.com.sa', '966538363376', '2022122512568-2.jpg', '2022-12-25 12:56:14', '2022-12-25 12:56:14'),
(26, '4', 15, 0, 'عاصم يوسف', 'مسئول دعم فني', 'https://app.jndlh.com.sa/jan-86i-qvr-xqs', 'assam@jandalah.com.sa', '249118820420', '2022122512578-2.jpg', '2022-12-25 12:57:43', '2022-12-25 12:57:43'),
(27, '4', 30, 0, 'علاء هاشم', 'نائب المدير التتنفيذي للخدمات الماليه', 'https://app.jndlh.com.sa/jan-zex-xcb-eqc', 'ex@ex.com', '966559911961', '2022122513018-2.jpg', '2022-12-25 13:01:13', '2022-12-25 13:01:13'),
(28, '4', 31, 0, 'مصطفئ عماد', 'محاسب الزكاة والضريبة', 'https://app.jndlh.com.sa/jan-sxh-ur7-fhx', 'm.emad@jandalah.com.sa', '966504988396', '2022122513038-2.jpg', '2022-12-25 13:03:26', '2022-12-25 13:03:26'),
(29, '4', 31, 0, 'عيسى أحمد', 'محاسب الزكاة والضريبة', 'https://app.jndlh.com.sa/jan-bi6-efy-jng', 'ex@ex.com', '201221083890', '2022122513048-2.jpg', '2022-12-25 13:04:43', '2022-12-25 13:04:43'),
(30, '4', 32, 0, 'محمد عبدالعزيز', 'رئيس الحسابات', 'https://app.jndlh.com.sa/jan-yra-jbn-id4', 'ex@ex.com', '201204725846', '2022122513068-2.jpg', '2022-12-25 13:06:06', '2022-12-25 13:06:06'),
(31, '4', 33, 0, 'عمادعبد ربه', 'محاسب', 'https://app.jndlh.com.sa/jan-fvk-yvr-v2y', 'emad-abdrbo@jandalah.com.sa', '966555637667', '2022122513078-2.jpg', '2022-12-25 13:07:40', '2022-12-25 13:07:40'),
(32, '4', 33, 0, 'ناصر الابياوي', 'محاسب', 'https://app.jndlh.com.sa/jan-gjl-jij-pcq', 'naser.alybay@jandalah.com.sa', '201149989218', '2022122513088-2.jpg', '2022-12-25 13:08:49', '2022-12-25 13:08:49'),
(33, '5', 32, 0, 'أيمن البجلاني', 'رئيس الحسابات', 'https://app.jndlh.com.sa/jan-xdm-qdw-yfg', 'a.bagalaty@jandalah.com.sa', '201103866415', '2022122513118-2.jpg', '2022-12-25 13:11:51', '2022-12-25 13:11:51'),
(34, '5', 33, 0, 'محمد السيد', 'محاسب', 'https://app.jndlh.com.sa/jan-qru-uev-ypp', 'm.alsaeed@jandalah.com.sa', '201017301997', '2022122513128-2.jpg', '2022-12-25 13:12:47', '2022-12-25 13:12:47'),
(35, '5', 33, 0, 'هايدي محمود', 'محاسب (دوام جزئي)', 'https://app.jndlh.com.sa/jan-afq-zlr-jcq', 'haidy@jandalah.com.sa', '201276076656', '2022122513148-2.jpg', '2022-12-25 13:14:43', '2022-12-25 13:14:43'),
(36, '5', 33, 0, 'طارق سليم', 'محاسب', 'https://app.jndlh.com.sa/jan-z8x-oj6-zfe', 'ex@ex.com', '201550711206', '2022122513158-2.jpg', '2022-12-25 13:15:35', '2022-12-25 13:15:35'),
(37, '6', 11, 0, 'محمد الدسوقي', 'المدير التنفيذي', 'https://app.jndlh.com.sa/jan-iyy-rfs-okk', 'm.desoky@jandalah.com.sa', '966504381996', '2022122513328-2.jpg', '2022-12-25 13:31:20', '2022-12-25 13:32:32'),
(38, '6', 34, 0, 'عمرو براري', 'مدير العمليات', 'https://app.jndlh.com.sa/jan-iyy-rfs-okk', 'amr.brary@jandalah.com.sa', '966552679911', '2022122513338-2.jpg', '2022-12-25 13:33:52', '2022-12-25 13:33:52'),
(39, '6', 35, 0, 'معتز بدير', 'دعم لوجستي', 'https://app.jndlh.com.sa/jan-ig8-yhv-uny', 'm.bdeer@jandalah.com.sa', '966532429748', '2022122513348-2.jpg', '2022-12-25 13:34:54', '2022-12-25 13:34:54'),
(40, '6', 36, 0, 'محمود فؤاد', 'مساعد اداري', 'https://app.jndlh.com.sa/jan-zng-sbp-qza', 'm.fouad@jandalah.com.sa', '201010580825', '2022122513358-2.jpg', '2022-12-25 13:35:52', '2022-12-25 13:35:52'),
(41, '6', 37, 0, 'أحمد سعد', 'امين المستودع', 'https://app.jndlh.com.sa/jan-niz-4n6-prd', 'ex@ex.com', '966532177054', '2022122513378-2.jpg', '2022-12-25 13:37:08', '2022-12-25 13:37:08'),
(42, '6', 38, 0, 'عماد حموده', 'مندوب مشتريات', 'https://app.jndlh.com.sa/jan-ugl-vjk-zuh', 'ex@ex.com', '966507879507', '2022122513398-2.jpg', '2022-12-25 13:39:01', '2022-12-25 13:39:01'),
(43, '6', 32, 0, 'محمود الرشيدي', 'رئيس الحسابات', 'https://app.jndlh.com.sa/jan-a2b-dm7-1gi', 'm.rashedy@jandalah.com.sa', '201116222898', '2022122513408-2.jpg', '2022-12-25 13:40:04', '2022-12-25 13:40:04'),
(44, '6', 40, 0, 'تامـر مكاوي', 'محاسب', 'https://app.jndlh.com.sa/jan-13n-crr-ivx', 'tamer.saad@jandalah.com.sa', '201103865662', '2022122513408-2.jpg', '2022-12-25 13:40:57', '2022-12-25 13:40:57'),
(45, '6', 40, 0, 'أحمد يحيي', 'محاسب', 'https://app.jndlh.com.sa/jan-9ra-neb-imy', 'a.yahia@jandalah.com.sa', '201022015650', '2022122513418-2.jpg', '2022-12-25 13:41:52', '2022-12-25 13:41:52'),
(46, '7', 41, 0, 'أحمد بسيوني', 'مدير ادارة تكنولوجيا المعلومات', 'https://app.jndlh.com.sa/jan-7cr-4wu-1bs', 'ex@ex.com', '201103866262', '2022122610178-2.jpg', '2022-12-26 10:17:09', '2022-12-26 10:17:09'),
(47, '7', 42, 0, 'أيمن صالح', 'مستشار تقني', 'https://app.jndlh.com.sa/jan-tgl-tgn-5pg', 'ex@ex.com', '201000009471', '2022122610188-2.jpg', '2022-12-26 10:18:12', '2022-12-26 10:18:12'),
(48, '8', 43, 0, 'علاء عبدالحكيم', 'مسئولة الموارد البشرية', 'https://app.jndlh.com.sa/jan-eai-uxu-ugi', 'ola@jandalah.com.sa', '201023638198', '2022122610208-2.jpg', '2022-12-26 10:20:17', '2022-12-26 10:20:17'),
(49, '8', 44, 0, 'ندا محمود', 'مسئولة الموارد البشرية', 'https://app.jndlh.com.sa/jan-hhw-2pa-vqx', 'nada@jandalah.com.sa', '201033157751', '2022122610228-2.jpg', '2022-12-26 10:22:35', '2022-12-26 10:22:35'),
(50, '8', 45, 0, 'لينه الصديق', 'مسئوله التدريب', 'https://app.jndlh.com.sa/jan-zk2-ook-zvg', 'lenaelsiddig@gmail.com', '966508844910', '2022122610288-2.jpg', '2022-12-26 10:28:04', '2022-12-26 10:28:04'),
(51, '9', 46, 0, 'أحمد داود', 'مسئول الشئون القانونية', 'https://app.jndlh.com.sa/jan-ae1-y6h-wrs', 'ex@ex.com', '201009508081', '2022122610308-2.jpg', '2022-12-26 10:30:39', '2022-12-26 10:30:39'),
(52, '9', 47, 0, 'اسامه براري', 'مستشار قانوني', 'https://app.jndlh.com.sa/jan-xif-hhi-8cy', 'osama1@jandalah.com.sa', '966537015651', '2022122610328-2.jpg', '2022-12-26 10:32:05', '2022-12-26 10:32:05'),
(53, '9', 48, 0, 'محمد قادومه', 'مدير اداره الشئون القانونيه', 'https://app.jndlh.com.sa/jan-ofp-pny-jfg', 'ex@ex.com', '966567383946', '2022122610338-2.jpg', '2022-12-26 10:33:18', '2022-12-26 10:33:18'),
(54, '10', 49, 0, 'ابراهيم حسن', 'محاسب', 'https://app.jndlh.com.sa/jan-0ug-d5n-7jh', 'ibra.hassan@jandalah.com.sa', '201278971813', '2022122610348-2.jpg', '2022-12-26 10:34:57', '2022-12-26 10:34:57'),
(55, '10', 49, 0, 'محمود هلهول', 'محاسب', 'https://app.jndlh.com.sa/jan-bkj-uyv-xfx', 'm.halhol@jandalah.com.sa', '201118571181', '2022122610368-2.jpg', '2022-12-26 10:36:33', '2022-12-26 10:36:33'),
(56, '10', 49, 0, 'أحمد عادل', 'محاسب', 'https://app.jndlh.com.sa/jan-prn-ntp-04w', 'ex@ex.com', '201016653604', '2022122610388-2.jpg', '2022-12-26 10:38:13', '2022-12-26 10:38:13'),
(57, '11', 50, 0, 'عماد زارع', 'المدير التنفيذي', 'https://app.jndlh.com.sa/jan-syi-0yg-rso', 'emad_hz@yahoo.com', '966560456005', '2022122610398-2.jpg', '2022-12-26 10:39:31', '2022-12-26 10:39:31'),
(58, '11', 51, 0, 'أحمد محمود', 'مسئول عام', 'https://app.jndlh.com.sa/jan-cxf-huk-doq', 'a.mahmoud@jandalah.com.sa', '966532604751', '2022122610408-2.jpg', '2022-12-26 10:40:43', '2022-12-26 10:40:43'),
(59, '11', 52, 0, 'مروة السيد', 'مطورة البرنامج', 'https://app.jndlh.com.sa/jan-j9d-ale-slx', 'ex@ex.com', '201146122539', '2022122610418-2.jpg', '2022-12-26 10:41:44', '2022-12-26 10:41:44'),
(60, '11', 53, 0, 'تسنيم أحمد', 'مسئوله دعم فني', 'https://app.jndlh.com.sa/jan-jcl-3gu-fv6', 'ex@ex.com', '201019803212', '2022122610428-2.jpg', '2022-12-26 10:42:39', '2022-12-26 10:42:39'),
(61, '11', 54, 0, 'روضه محمد', 'مسئوله تسويق', 'https://app.jndlh.com.sa/jan-ysw-hsx-umb', 'rawda@jandalah.com.sa', '201019803212', '2022122610438-2.jpg', '2022-12-26 10:43:41', '2022-12-26 10:43:41'),
(62, '11', 55, 0, 'مصطفئ داود', 'مصمم جرافيك', 'https://app.jndlh.com.sa/jan-ce2-2wy-e2r', 'ex@ex.com', '201020205272', '2022122610478-2.jpg', '2022-12-26 10:47:19', '2022-12-26 10:47:19'),
(63, '11', 55, 0, 'ياسر عماد', 'مصمم جرافيك', 'https://app.jndlh.com.sa/jan-pqr-guj-cy9', 'ex@ex.com', '201100607004', '2022122610488-2.jpg', '2022-12-26 10:48:17', '2022-12-26 10:48:17'),
(64, '11', 56, 0, 'عبدالرحيم مهران', 'موشن جرافيك', 'https://app.jndlh.com.sa/jan-nm5-siv-ax6', 'ex@ex.com', '201117588552', '2022122610498-2.jpg', '2022-12-26 10:49:17', '2022-12-26 10:49:17'),
(65, '11', 56, 0, 'علي محمد', 'موشن جرافيك', 'https://app.jndlh.com.sa/jan-934-3nh-3du', 'ex@ex.com', '201092474892', '2022122610508-2.jpg', '2022-12-26 10:50:13', '2022-12-26 10:50:13'),
(66, '11', 57, 0, 'بسمه عبدالمطلب', 'كاتيه محتوى', 'https://app.jndlh.com.sa/jan-tr0-k37-o0e', 'ex@ex.com', '201091082555', '2022122610518-2.jpg', '2022-12-26 10:51:28', '2022-12-26 10:51:28'),
(67, '11', 58, 0, 'عمرو سليمان', 'مسئول الاعلانات الممؤلة', 'https://app.jndlh.com.sa/jan-jqt-ya9-mm0', 'ex@ex.com', '966000000000', '2022122610598-2.jpg', '2022-12-26 10:59:19', '2022-12-26 10:59:19'),
(68, '12', 59, 0, 'نجم الدين ادريس', 'المدير التنفيذي', 'https://app.jndlh.com.sa/jan-crr-1dn-c2n', 'najm@jandalah.com.sa', '966543359731', '2022122611008-2.jpg', '2022-12-26 11:00:43', '2022-12-26 11:00:43'),
(69, '12', 60, 0, 'سامي عبدالحميد', 'مدير المصانع', 'https://app.jndlh.com.sa/jan-4a6-pna-i5r', 'samy@jandalah.com.sa', '966548535807', '2022122611028-2.jpg', '2022-12-26 11:02:22', '2022-12-26 11:02:22'),
(70, '12', 61, 0, 'هيثم عبدالعزيز', 'رئيس الحسابات', 'https://app.jndlh.com.sa/jan-03f-8ob-agi', 'h.abd@jandalah.com.sa', '201020831818', '2022122611038-2.jpg', '2022-12-26 11:03:36', '2022-12-26 11:03:36'),
(71, '12', 61, 0, 'ماهر صبري', 'رئيس الحسابات', 'https://app.jndlh.com.sa/jan-jww-aiz-ahc', 'maher@jandalah.com.sa', '201149988288', '2022122611048-2.jpg', '2022-12-26 11:04:50', '2022-12-26 11:04:50'),
(72, '12', 62, 0, 'غاده محمد', 'محاسب', 'https://app.jndlh.com.sa/jan-clb-evg-nwj', 'ghada@jandalah.com.sa', '201149997912', '2022122611078-2.jpg', '2022-12-26 11:07:53', '2022-12-26 11:07:53'),
(73, '12', 62, 0, 'محمد حسين', 'محاسب', 'https://app.jndlh.com.sa/jan-5zp-kie-wpa', 'm.hossin@jandalah.com.sa', '201103865611', '2022122611088-2.jpg', '2022-12-26 11:08:56', '2022-12-26 11:08:56'),
(74, '12', 62, 0, 'محمود زيدان', 'محاسب', 'https://app.jndlh.com.sa/jan-fw4-k2n-3ej', 'mahmoud_zidan@jandalah.com', '201149997728', '2022122611108-2.jpg', '2022-12-26 11:10:07', '2022-12-26 11:10:07'),
(75, '12', 63, 0, 'محمد سامي', 'مسئول مشتريات', 'https://app.jndlh.com.sa/jan-jf4-lft-exq', 'm.samy@jandalah.com.sa', '201149997728', '2022122611118-2.jpg', '2022-12-26 11:11:22', '2022-12-26 11:11:22'),
(76, '12', 63, 0, 'أحمد السلماوي', 'مسئول مشتريات', 'https://app.jndlh.com.sa/jan-ah0-end-ysi', 'ex@ex.com', '966532576736', '2022122611138-2.jpg', '2022-12-26 11:13:47', '2022-12-26 11:13:47'),
(77, '12', 64, 0, 'عبده قرني', 'خبير تعاوني', 'https://app.jndlh.com.sa/jan-afw-uos-dqx', 'abdo.korany@jandalah.com.sa', '966501734258', '2022122611148-2.jpg', '2022-12-26 11:14:49', '2022-12-26 11:14:49'),
(78, '12', 65, 0, 'اسراء ابراهيم', 'سكرتيرة الجمعية', 'https://app.jndlh.com.sa/jan-ew4-s53-u9l', 'esraa@jandalah.com.sa', '201149997911', '2022122611158-2.jpg', '2022-12-26 11:15:52', '2022-12-26 11:15:52'),
(79, '2', 66, 0, 'نوره عبدالله السواجي', 'موارد بشرية', 'https://app.jndlh.com.sa/gha-bho-tg7-bja', 'alsawaji88@hotmail.com', '966552428120', '2022122706488-2.jpg', '2022-12-27 06:48:29', '2022-12-27 06:48:29'),
(80, '2', 66, 0, 'نوره رشدان الدوسري', 'موارد بشرية', 'https://app.jndlh.com.sa/gha-bho-tg7-bja', 'nourar406@gmail.com', '966535840050', '2022122706498-2.jpg', '2022-12-27 06:49:22', '2022-12-27 06:49:22'),
(81, '2', 66, 0, 'عبدالله ناصر الصالح', 'محاماة وشؤون قانونية', 'https://app.jndlh.com.sa/jan-xif-hhi-8cy', 'A.alsaleh0@outlook.com', '966558860040', '2022122706548-2.jpg', '2022-12-27 06:54:36', '2022-12-27 06:54:36'),
(82, '2', 66, 0, 'رغد محمد العجلاني', 'محاسبه', 'https://app.jndlh.com.sa/gha-qcb-cgv-2u1', 'Raghad97mh@hotmail.com', '996552261192', '2022122706568-2.jpg', '2022-12-27 06:56:06', '2022-12-27 06:56:06'),
(83, '2', 66, 0, 'بهية عليان الجهني', 'برمجة', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'Bahiab144@gmail.com', '966583677667', '2022122706588-2.jpg', '2022-12-27 06:58:44', '2022-12-27 06:58:44'),
(84, '2', 66, 0, 'ناصر راشد القريني', 'برمجة', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'nasser123451255@gmail.com', '966501741099', '2022122707008-2.jpg', '2022-12-27 07:00:55', '2022-12-27 07:00:55'),
(85, '2', 66, 0, 'موسى محمد عسيري', 'برمجة', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'mousaasiri1@gmail.com', '966538439938', '2022122707038-2.jpg', '2022-12-27 07:03:19', '2022-12-27 07:03:19'),
(86, '2', 66, 0, 'مشعل علي الاحمري', 'برمجة', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'm.ali1421909@gmail.com', '966536088292', '2022122707068-2.jpg', '2022-12-27 07:06:13', '2022-12-27 07:06:13'),
(87, '2', 66, 0, 'منار سعود المطيري', 'برمجة', 'https://app.jndlh.com.sa/gha-xxb-r4c-dhy', 'manarce76@gmail.com', '966538275475', '2022122707068-2.jpg', '2022-12-27 07:06:58', '2022-12-27 07:06:58'),
(88, '2', 66, 0, 'عفاف مناحي المطيري', 'التسويق', 'https://app.jndlh.com.sa/gha-0hv-ngb-rkc', 'afafalmutairi00@gmail.com', '966537866334', '2022122707088-2.jpg', '2022-12-27 07:08:13', '2022-12-27 07:08:13'),
(89, '2', 66, 0, 'ساره حمد الطمره', 'التسويق', 'https://app.jndlh.com.sa/gha-0hv-ngb-rkc', 'Sarah-t1@hotmail.com', '966501665899', '2022122707148-2.jpg', '2022-12-27 07:14:40', '2022-12-27 07:14:40'),
(90, '2', 66, 0, 'بشاير سلمان الفيفي', 'التسويق', 'https://app.jndlh.com.sa/gha-0hv-ngb-rkc', 'Bashaier.Alabdli@hotmail.com', '966509704939', '2022122707188-2.jpg', '2022-12-27 07:18:19', '2022-12-27 07:18:19'),
(91, '2', 66, 0, 'غاليه أحمد ألامير', 'التسويق', 'https://app.jndlh.com.sa/gha-0hv-ngb-rkc', 'Ghaliahalameer2@gmail.com', '966534010312', '2022122707208-2.jpg', '2022-12-27 07:20:35', '2022-12-27 07:20:35'),
(92, '2', 66, 0, 'مشاعل بدر القحطاني', 'التسويق', 'https://app.jndlh.com.sa/gha-0hv-ngb-rkc', 'Mshaeelalqhtani@gmail.com', '966565521304', '2022122707228-2.jpg', '2022-12-27 07:22:57', '2022-12-27 07:22:57'),
(93, '2', 66, 0, 'شروق عايض الخليوي', 'التسويق', 'https://app.jndlh.com.sa/gha-0hv-ngb-rkc', 'shrooqalhrabiy55@gmail.com', '966592630690', '2022122707248-2.jpg', '2022-12-27 07:24:18', '2022-12-27 07:24:18');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name_ar`, `name_en`, `image`, `created_at`, `updated_at`) VALUES
(1, 'المعرض الافتراضى للمقيمين العقاريين', 'المعرض الافتراضى للمقيمين العقاريين', '202211200914images.jpg', '2022-11-20 06:24:51', '2022-11-20 07:14:15'),
(2, 'المعرض الافتراضى للمحامين', 'المعرض الافتراضى للمحامين', '202211200914download.jpg', '2022-11-20 07:14:55', '2022-11-20 07:14:55'),
(3, 'المعرض الافتراضى للمحاسبين القانونين', 'المعرض الافتراضى للمحاسبين القانونين', '202211200915download (1).jpg', '2022-11-20 07:15:38', '2022-11-20 07:15:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `footer_pages`
--

CREATE TABLE `footer_pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer_pages`
--

INSERT INTO `footer_pages` (`id`, `name_ar`, `name_en`, `title_ar`, `title_en`, `desc_ar`, `desc_en`, `created_at`, `updated_at`, `slug`) VALUES
(2, 'سياسة الخصوصية', 'privacy policy', 'سياسة الخصوصية', 'privacy policy', 'نوضح لك من خلال سياسة الخصوصية الخاصة بنا جميع ما يتعلق بجميع المعلومات الشخصية واستخدامها او الإفصاح عنها أثناء استخدامك للموقع ، بالإضافة إلى الخيارات المتاحة لك فيما يتعلق بهذه المعلومات بموجب سياسة الخصوصية هذه، يهمنا ان نوضح لك ان تركيزنا الاول على الحفاظ ;وضمان ;خصوصية استخدامك للموقع وخصوصية المعلومات التي تقدمها على الموقع مثل رقم الهوية الخاص بك ، حيث نستخدم معلوماتك الشخصية لتوفير وتحسين الخدمات المتاحة على الموقع و تحسين استخدامك للموقع ، وبمجرد استخدامك للموقع ، فإنك توافق على جمعنا واستخدامنا للمعلومات وفقًا لهذه السياسة', 'نوضح لك من خلال سياسة الخصوصية الخاصة بنا جميع ما يتعلق بجميع المعلومات الشخصية واستخدامها او الإفصاح عنها أثناء استخدامك للموقع ، بالإضافة إلى الخيارات المتاحة لك فيما يتعلق بهذه المعلومات بموجب سياسة الخصوصية هذه، يهمنا ان نوضح لك ان تركيزنا الاول على الحفاظ  وضمان  خصوصية استخدامك للموقع وخصوصية المعلومات التي تقدمها على الموقع مثل رقم الهوية الخاص بك ، حيث نستخدم معلوماتك الشخصية لتوفير وتحسين الخدمات المتاحة على الموقع و تحسين استخدامك للموقع ، وبمجرد استخدامك للموقع ، فإنك توافق على جمعنا واستخدامنا للمعلومات وفقًا لهذه السياسة.', '2023-01-24 05:33:52', '2023-01-24 05:36:52', 'privacy'),
(3, 'حماية العملاء', 'Customer protection', 'حماية العملاء', 'Customer protection', 'توفر جهات اسلوب الأمان الذي يحمي معلومات العملاء و المستفيدين من المنصة مهما كان نوع الجهاز المستخدم و مهما كان وقت الاستخدام اثناء ذلك ، يتم استعمال و تخزين البيانات الخاصة بالعملاء و المستفيدين من المنصة من اجل توفير لهم المكاتب الافتراضية و ايضا تسهيل العديد من الخدمات الاخرى لهم ولا يتم تسريبها بأي شكل من الأشكال او تحت أي ظرف ، كمان نعمل على توفير بيئة أمنه و سرية للعمل و وضع الإجراءات المناسبة و الأنظمة الرقابية الفعالة لحماية عملائنا', 'توفر جهات اسلوب الأمان الذي يحمي معلومات العملاء و المستفيدين من المنصة مهما كان نوع الجهاز المستخدم و مهما كان وقت الاستخدام اثناء ذلك ، يتم استعمال و تخزين البيانات الخاصة بالعملاء و المستفيدين من المنصة من اجل توفير لهم المكاتب الافتراضية و ايضا تسهيل العديد من الخدمات الاخرى لهم ولا يتم تسريبها بأي شكل من الأشكال او تحت أي ظرف ، كمان نعمل على توفير بيئة أمنه و سرية للعمل و وضع الإجراءات المناسبة و الأنظمة الرقابية الفعالة لحماية عملائنا', '2023-01-24 05:35:25', '2023-01-24 05:36:04', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `f_a_q_s`
--

CREATE TABLE `f_a_q_s` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(225) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `question_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `question_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `answer_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `answer_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `f_a_q_s`
--

INSERT INTO `f_a_q_s` (`id`, `category_id`, `question_ar`, `question_en`, `answer_ar`, `answer_en`, `created_at`, `updated_at`) VALUES
(2, 'انشاء حساب', 'كيف انشأ حساب؟', NULL, 'الذهاب الى jehat.sa وثم سجل كمستفيد واحجز مكتبك الافتراضي وثم اظغط على كلمه اضغط هنا وثم اظغط على مستخدم جديد وإملاء البيانات .', NULL, '2022-10-31 08:47:16', '2022-11-02 06:58:14'),
(3, 'اظهار كلمه مكتبي', 'لماذا لاتظهر لي كلمه مكتبي في الايقونات؟', NULL, 'بعد التسجيل في الموقع يتم اضافه المستفيد كا موظف في الجهه التابعه لديه وثم تظهر كلمه مكتبي .', NULL, '2022-10-31 08:51:49', '2022-11-02 06:37:12'),
(7, 'مراجعه الاجتماع بعد غلقه', 'هل يمكنني مراجعه الاجتماع بعد غلقه؟', NULL, 'نعم يمكنك اذا كنت مستفيد تذهب الى الرئيسيه ثم اجتماعات ، واذا كنت مسجل تذهب الى الرئيسيه ثم مكتبي ثم اجتماعات ثم كل الاجتماعات .', NULL, '2022-11-02 06:38:06', '2022-11-02 06:38:06'),
(8, 'اسناد المعاملات', 'هل يمكنني اسناد المعاملات؟', NULL, 'نعم بعد الانتهاء من المعامله تذهب الى معاملاتي وتذهب الى المعامله التي انشأتها للتو ستظهر لك طلب اسناد في نصف الصفحه .', NULL, '2022-11-02 06:39:41', '2022-11-02 06:39:41'),
(9, 'طباعه الاجتماع', 'هل يمكن طباعه الاجتماع؟', NULL, 'يمكنك ، بعد الانتهاء من الاجتماع تذهب الى اجتماعك في اخرالصفحه توجد كلمه طباعه التقرير ويوجد فيه تقنيه الـQR أيضا .', NULL, '2022-11-02 06:40:25', '2022-11-02 06:40:25'),
(10, 'الخصوصيه', 'هل منصة جهات تحمي لي خصوصيتي وهل يستطيع احد الإطلاع على بياناتي؟', NULL, 'منصة جهات تتمتع بالخصوصية وهي قادرة على حماية بياناتك تماما.', NULL, '2022-11-02 06:49:15', '2022-11-02 06:52:28'),
(11, 'الهدف من المنصه', 'مالهدف الرئيسي من منصة جهات؟', NULL, 'الهدف الرئيسي من منصه جهات هي كل المنصات التي يريدها كل شخص مقيم او مواطن شركه او قطاع حكومي او جمعيات خيريه جميعها في منصه واحده ويمكن ارسال أي طلب لاي مستفيد من المنصه.', NULL, '2022-11-02 06:49:51', '2022-11-02 06:49:51'),
(12, 'استفاده المستفيد', 'مالذي استفيد منه كمستفيد في المنصة؟', NULL, 'لدينا خدمات كثيره في المنصه مثلا الفاتوره الاكترونيه او نظام اداري كامل يعمل على المنشأه لديك , الاستفاده كمستخدم أيضا ان ارسال الرسائل عبر المنصه افضل من البريد الاكتروني غالبا لاتظهر فيه الرسائل.', NULL, '2022-11-02 06:50:29', '2022-11-02 06:50:29'),
(13, 'بديل البريد الالكتروني', 'هل تغني منصة جهات عن تداول المعاملات عن طريق الايميلات ؟', NULL, 'تغنيك منصة جهات عن تداول او ارسال المعاملات عن طريق البريد الاكتروني.', NULL, '2022-11-02 06:51:13', '2022-11-02 06:51:13'),
(14, 'انشاء اجتماع', 'كيف يمكنني انشاء اجتماع ؟', NULL, 'تذهب الى خانه مكتبي ثم الايقونات على يمين الصفحه اجتماعات وثم اضافه اجتماع .', NULL, '2022-11-02 06:53:15', '2022-11-02 06:53:15'),
(15, 'اضافة اعضاء بالاجتماع', 'كيف يمكنني اضافة اعضاء بالاجتماع ؟', NULL, 'في صفحه اضافه اجتماع في اسفل الصفحه توجد البحث عن عضو ملاحظه يجب على من يتم اضافته في الاجتماع ان يسجل في المنصه الأول وثم يتم اضافته في الاجتماع .', NULL, '2022-11-02 06:53:59', '2022-11-02 06:53:59'),
(16, 'التصويت بالاجتماع', 'هل يستطيع جميع الاعضاء بالاجتماع التصويت ؟', NULL, 'نعم ، تذهب الى مكتبي وثم الايقونات على اليمين الاجتماعات ثم كل الاجتماعات تذهب الى الاجتماع المراد التصويت عليه وثم في اسفل الصفحه حضور الاجتماع وثم في اسفل الصفحه كلمه تصويت .', NULL, '2022-11-02 06:54:51', '2022-11-02 06:54:51'),
(17, 'اضافة موظف', 'كيف يمكن اضافة موظف ؟', NULL, 'الذهاب الى مكتبي ثم الايقونات على يمين الصفحه وثم اختيار الموظفين-اضافه موظف .', NULL, '2022-11-02 06:55:33', '2022-11-02 06:55:33'),
(18, 'تعديل البيانات للموظفين', 'كيف يمكن تعديل البيانات للموظفين ؟', NULL, 'الذهاب الى مكتبي ثم الايقونات على يمين الصفحه وثم ايقونه الموظفين-الموظفين ثم تكتب اسم الموظف المراد تعديل البيانات عليه ثم ايقونه القلم على اليمين .', NULL, '2022-11-02 06:56:15', '2022-11-02 06:56:15'),
(19, 'الخصوصيه في المعاملات', 'هل توجد خصوصيه في المعاملات؟', NULL, 'نعم توجد خصوصيه ، بعد كتابه المعامله لديك تذهب الى سري في اسفل الصفحه وثم حدد الموظف المستقبل لهذه المعامله .', NULL, '2022-11-02 06:56:50', '2022-11-02 06:56:50'),
(20, 'الاستفسار في سؤال غير متوفر', 'لم اجد سؤالي هنا', NULL, 'اذا لم تجد سؤالك هنا يمكنك التواصل معنا عبر الواتس اب 966533384491+', NULL, '2022-11-02 06:57:26', '2022-11-02 06:57:26');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `title_ar`, `title_en`, `name_ar`, `name_en`, `desc_ar`, `desc_en`, `image`, `link`, `created_at`, `updated_at`) VALUES
(1, 'انشاء جهه جديده', 'Create a new entity', 'انشاء جهه جديده', 'Create a new institution', 'انشاء جهه جديده', 'Create a new entity', '202301231231g1.jpg', 'https://www.jehat.sa/media/mp4/Add_dep.mp4', '2023-01-23 09:22:38', '2023-01-24 03:37:40'),
(2, 'الية التسجيل كمستفيد', 'Registration mechanism as a beneficiary', 'الية التسجيل كمستفيد', 'How to register as a beneficiary?', 'الية التسجيل كمستفيد', 'Registration mechanism as a beneficiary', '202301231234g2.jpg', 'https://www.jehat.sa/media/mp4/client_register.mp4', '2023-01-23 09:34:48', '2023-01-24 03:38:46'),
(3, 'تغيير لغة العرض', 'Change display language', 'تغيير لغة العرض', 'Change display language', 'تغيير لغة العرض', 'Change display language', '202301240525g3.jpg', 'https://www.jehat.sa/media/mp4/lang.mp4', '2023-01-24 02:25:40', '2023-01-24 02:25:40'),
(4, 'حضور الاجتماعات والتصويت', 'Attend meetings and vote', 'حضور الاجتماعات والتصويت', 'Attend meetings and vote', 'حضور الاجتماعات والتصويت', 'Attend meetings and vote', '202301240527g8.jpg', 'https://www.jehat.sa/media/mp4/View_Meeting.mp4', '2023-01-24 02:27:41', '2023-01-24 02:27:41'),
(5, 'استرجاع كلمه المرور', 'Password Recovery', 'استرجاع كلمه المرور', 'Password Recovery', 'استرجاع كلمه المرور', 'Password Recovery', '202301240534g4.jpg', 'https://www.jehat.sa/media/mp4/Client_Forget_Password.mp4', '2023-01-24 02:34:38', '2023-01-24 02:34:38'),
(6, 'تعديل البيانات الشخصيه', 'Modify personal data', 'تعديل البيانات الشخصيه', 'Edit personal data', 'تعديل البيانات الشخصيه', 'Modify personal data', '202301240538g2.jpg', 'https://www.jehat.sa/media/mp4/Edit_Client.mp4', '2023-01-24 02:38:46', '2023-01-24 03:41:16'),
(7, 'اضافه المفوضين واداره المستندات', 'Add delegates and manage documents', 'اضافه المفوضين واداره المستندات', 'Add delegates and manage documents', 'اضافه المفوضين واداره المستندات', 'Add delegates and manage documents', '202301240540g9.jpg', 'https://www.jehat.sa/media/mp4/add_m.mp4', '2023-01-24 02:40:50', '2023-01-24 02:40:50'),
(8, 'اضافه واداره المواعيد', 'Add and manage appointments', 'اضافه واداره المواعيد', 'Add and manage appointments', 'اضافه واداره المواعيد', 'Add and manage appointments', '202301240543g6.jpg', 'https://www.jehat.sa/media/mp4/add_t.mp4', '2023-01-24 02:43:01', '2023-01-24 02:43:01'),
(9, 'اضافه ومتابعه طلب', 'Add and follow up request', 'اضافه ومتابعه طلب', 'Add and follow a request', 'اضافه ومتابعه طلب', 'Add and follow up request', '202301240545g10.jpg', 'https://www.jehat.sa/media/mp4/Add_Transaction.mp4', '2023-01-24 02:45:45', '2023-01-24 03:43:07'),
(10, 'الانتقال الى مكتبي', 'Moving to my office', 'الانتقال الى مكتبي', 'Go to my office', 'الانتقال الى مكتبي', 'Moving to my office', '202301240547g7.jpg', 'https://www.jehat.sa/media/mp4/convert.mp4', '2023-01-24 02:47:10', '2023-01-24 03:43:40'),
(11, 'اضافه وادارة الفواتير الالكترونية', 'Add and manage electronic bills', 'اضافه وادارة الفواتير الالكترونية', 'Add and manage electronic bills', 'اضافه وادارة الفواتير الالكترونية', 'Add and manage electronic bills', '202301240549h1.jpg', 'https://www.jehat.sa/media/mp4/m/create_bills.mp4', '2023-01-24 02:49:05', '2023-01-24 04:14:08'),
(12, 'اضافه ومتابعه الطلبات', 'Add and follow orders', 'اضافه ومتابعه الطلبات', 'Add and follow orders', 'اضافه ومتابعه الطلبات', 'Add and follow orders', '202301240550h2.jpg', 'https://www.jehat.sa/media/mp4/m/Add_Transaction.mp4', '2023-01-24 02:50:57', '2023-01-24 04:15:43'),
(13, 'ادارة الاجتماع اثناء الانعقاد', 'Managing the meeting during the session', 'ادارة الاجتماع اثناء الانعقاد', 'Managing the meeting during the session', 'ادارة الاجتماع اثناء الانعقاد', 'Managing the meeting during the session', '202301240553h3.jpg', 'https://www.jehat.sa/media/mp4/m/manage_meeting.mp4', '2023-01-24 02:53:04', '2023-01-24 04:17:07'),
(14, 'التعليقات وانواع الاسناد', 'Comments and types of attribution', 'التعليقات وانواع الاسناد', 'Comments and types of attribution', 'التعليقات وانواع الاسناد', 'Comments and types of attribution', '202301240556h4.jpg', 'https://www.jehat.sa/media/mp4/m/View_Transaction.mp4', '2023-01-24 02:56:00', '2023-01-24 04:18:18'),
(15, 'ادارة العملاء والاقسام', 'Customer and department management', 'ادارة العملاء والاقسام', 'Customer and department management', 'ادارة العملاء والاقسام', 'Customer and department management', '202301240617h5.jpg', 'https://www.jehat.sa/media/mp4/m/All_MODClients.mp4', '2023-01-24 03:17:43', '2023-01-24 04:19:24'),
(17, 'ادارة غرف الفيديو كونفرس', 'Managing video conference rooms', 'ادارة غرف الفيديو كونفرس', 'Managing video conference rooms', 'ادارة غرف الفيديو كونفرس', 'Managing video conference rooms', '202301240624h6.jpg', 'https://www.jehat.sa/media/mp4/m/session.mp4', '2023-01-24 03:24:32', '2023-01-24 04:20:49'),
(18, 'الية انشاء الاجتماعات', 'How to set up meetings', 'الية انشاء الاجتماعات', 'How to set up meetings', 'الية انشاء الاجتماعات', 'How to set up meetings', '202301240628h7.jpg', 'https://www.jehat.sa/media/mp4/m/create_meeting.mp4', '2023-01-24 03:28:19', '2023-01-24 04:23:18'),
(19, 'استخدام فلتر بحث المعاملات', 'Use the transaction search filter', 'استخدام فلتر بحث المعاملات', 'Use the transaction search filter', 'استخدام فلتر بحث المعاملات', 'Use the transaction search filter', '202301240630h8.jpg', 'https://www.jehat.sa/media/mp4/m/search_transaction.mp4', '2023-01-24 03:30:26', '2023-01-24 04:24:31'),
(20, 'ادارة الموظفين', 'Staff management', 'ادارة الموظفين', 'Staff management', 'ادارة الموظفين', 'Staff management', '202301240632h9.jpg', 'https://www.jehat.sa/media/mp4/m/employee_management.mp4', '2023-01-24 03:32:37', '2023-01-24 04:25:47'),
(21, 'اضافه واداره المواعيد', 'Add and manage appointments', 'اضافه واداره المواعيد', 'Add and manage appointments', 'اضافه واداره المواعيد', 'Add and manage appointments', '202301240635h10.jpg', 'https://www.jehat.sa/media/mp4/m/date_management%20.mp4', '2023-01-24 03:35:59', '2023-01-24 04:27:09');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(17, '2014_10_12_000000_create_users_table', 1),
(18, '2014_10_12_100000_create_password_resets_table', 1),
(19, '2019_08_19_000000_create_failed_jobs_table', 1),
(20, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(21, '2022_10_11_093247_create_categories_table', 1),
(22, '2022_10_11_093424_create_pages_table', 1),
(23, '2022_10_11_100237_create_activity_logs_table', 1),
(24, '2022_10_20_075918_create_companies_table', 1),
(25, '2022_10_20_080043_create_employees_table', 1),
(26, '2022_10_31_075046_create_faq_table', 1),
(27, '2022_11_09_094206_create_departments_table', 2),
(28, '2022_11_20_082211_create_events_table', 3),
(29, '2023_01_16_082215_create_cards_table', 4),
(30, '2023_01_16_202344_create_aboutus_table', 4),
(31, '2023_01_16_084314_create_contact_table', 5),
(32, '2023_01_16_104701_media', 5),
(33, '2023_01_16_121449_create_news_table', 5),
(34, '2023_01_17_122034_create_about_table', 6),
(35, '2023_01_17_125512_create_about_us_table', 7),
(36, '2023_01_19_094330_create_footer_pages_table', 8),
(37, '2023_02_09_105055_create_websiteusers_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_ar` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `news_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `name_ar`, `name_en`, `title_ar`, `title_en`, `description_ar`, `description_en`, `link`, `images`, `news_date`, `created_at`, `updated_at`) VALUES
(1, 'حضور صاحب السمو الملكي الأمير فيصل بن بندر بن عبدالعزيز آل سعود، أمير منطقة الرياض، انتخابات مجلس إدارة جمعية بن باز الخيرية وذلك عبر منصة جهات', 'The attendance of His Royal Highness Prince Faisal bin Bandar bin Abdulaziz Al Saud, Governor of the Riyadh region, to the elections of the Board of Directors of the Bin Baz Charity Association, through the Jehat platform', 'حضور صاحب السمو الملكي الأمير فيصل بن بندر بن عبدالعزيز آل سعود، أمير منطقة الرياض، انتخابات مجلس إدارة جمعية بن باز الخيرية وذلك عبر منصة جهات', 'The attendance of His Royal Highness Prince Faisal bin Bandar bin Abdulaziz Al Saud, Governor of the Riyadh region, to the elections of the Board of Directors of the Bin Baz Charity Association, through the Jehat platform', '<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;حضور صاحب السمو الملكي الأمير/ فيصل بن بندر بن عبدالعزيز آل سعود، أمير منطقة الرياض، انتخابات مجلس إدارة جمعية بن باز الخيرية وذلك عبر #منصة_جهات</p>', 'The presence of His Royal Highness Prince / Faisal bin Bandar bin Abdulaziz Al Saud, Governor of the Riyadh region, the elections of the Board of Directors of the Bin Baz Charity Association, through the #Agency_platform', 'jj', '202301231102news.jpeg', '2023-01-01', '2023-01-23 08:02:16', '2023-01-23 08:02:16');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `slug_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_ar` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_en` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `category_id`, `slug_name`, `name_ar`, `name_en`, `title_ar`, `title_en`, `description_ar`, `description_en`, `link`, `images`, `created_at`, `updated_at`) VALUES
(7, 28, NULL, 'صفحه جديده للتجربه', NULL, 'صفحه جديده للتجربه', NULL, '<p>صفحه جديده للتجربه</p>', NULL, NULL, '', '2022-10-25 11:39:48', '2022-10-25 11:39:48'),
(9, 44, NULL, 'شرح طريقة عرض البيانات الشخصية', NULL, 'شرح طريقة عرض البيانات الشخصية', NULL, '<p>في منصة المستفيد نقوم بالضغط على أيقونة البيانات الشخصية ومن ثم ستظهر البيانات الخاصة بالمستفيد تحتوي على : الاسم - العنوان - الدولة - النوع - البريد الالكتروني - رقم الهاتف . ويمكنك التعديل عليها من خلال الضغط على أيقونة تعديل أسفل الصفحة وستظهر لك صفحة أيقونة حفظ لحفظ البيانات التي تم تعديلها.</p>', NULL, NULL, '', '2022-10-26 07:11:56', '2022-10-26 07:11:56'),
(10, 45, NULL, 'شرح طريقة عرض طلباتي', NULL, 'شرح طريقة عرض طلباتي', NULL, '<p>بالنقر على أيقونة (طلباتي) ستظهر صفحة تستطيع من خلالها تحديد الخصوصية وذلك باختيار ( مفتوحه - مغلقة ) وأيضا يمكنك عرض جميع الطلبات التي قمت برفعها من خلال قائمة تحتوي على بيانات الطلب مثل ( الموضوع - الموظف - نوع المعامله - التاريخ - الحالة والكود) .&nbsp;</p>', NULL, NULL, '', '2022-10-26 07:13:50', '2022-10-26 07:13:50'),
(11, 33, NULL, 'ماذا تعني خانة خطاباتي ؟', NULL, 'ماذا تعني خانة خطاباتي ؟', NULL, '<p>هي خانة تعرض لك جميع الخطابات المعروضة بصفحتك مرفق فيها رقم و عنوان و وقت و تاريخ وحالة (معتمد او مرفوض ) الخطاب ويوجد خانة تحكم يوجد بها (تفاصيل- حذف-طباعة) الخطاب وايضاً يمكن البحث عن الخطاب عن طريق التواريخ بتحديدها من و إلى تاريخ هجري او ميلادي &nbsp;ثم عرضه.</p>', NULL, NULL, '', '2022-10-26 07:15:56', '2022-10-26 07:15:56'),
(12, 48, NULL, 'شرح طريقة حضور الاجتماع كمستفيد', NULL, 'شرح طريقة حضور الاجتماع كمستفيد', NULL, '<p>تستطيع الاطلاع على ما يخص الاجتماعات التي تمت دعوتك إليها من خلال النقر على أيقونة (اجتماعاتي) الخاصة بك &nbsp;ومن ايقونة (كل الحالات) يمكنك الاطلاع على جميع الاجتماعات التي تم حضورها سوءا كان الاجتماع ( جديد - منعقد - تم - ملغي) تستطيع أيضا عرض جميع المعلومات عن الاجتماع ( رئيس الاجتماع وكوده وعنوانه وتاريخه ووقته ونوعه وحالته) . وتستطيع معرفة عدد الأعضاء المدعوين من خلال النقر على أيقونة (أعضاء الاجتماع) ويوجد أسفلها عدد الحاضرين والغائبين ونسبة الحضور . ويمكنك الاطلاع على منسوبي الجهات الذين تمت دعوتهم . ويتاح لك طباعة التقرير الخاص بالاجتماع من خلال النقر على أيقونة (طباعة التقرير) &nbsp;. وفي الأسفل توجد بنود الاجتماع ويتم التصويت عليها من خلال النقر على أيقونة تصويت على كل بند ومن ثم اختيار (موافق أو غير موافق ) ثم النقر على (تصويت) .&nbsp;</p>', NULL, NULL, '', '2022-10-26 07:16:54', '2022-10-26 07:16:54'),
(13, 34, NULL, 'كيف يمكنني إضافة خطاب ؟', NULL, 'كيف يمكنني إضافة خطاب ؟', NULL, '<p>من خانة إضافة خطاب يمكنك انشاء خطابك عن طريق كتابة عنوان ونص الخطاب بعد ذلك يمكنك معاينة الخطاب قبل حفظه عن طريق زر معاينه ثم نقوم بالضغط على حفظ.</p>', NULL, NULL, '', '2022-10-26 07:18:38', '2022-10-26 07:18:38'),
(14, 46, NULL, 'كيفية أضافة طلب', NULL, 'شرح كيفية إضافة طلب', NULL, '<p>بالنقر على ايقونة (إضافة طلب ) ستظهر لك صفحة بها (بيانات الطلب) ومنها يتم اختيار الجهة المراد ارسال الطلب إليها ثم اختيار(نوع الطلب - وكتابة الموضوع) ومن ثم إضافة جميع التفاصيل التي تختص بالطلب. حيث يمكنك تحديد أولوية الطلب ( طوارئ - عادية - مهمة - منخفضة ) وبالنقر على (اختيار الملفات) يمكنك ارفاق جميع المهمات الخاصة بالطلب ثم النقر على ايقونة حفظ أسفل الصفحة .&nbsp;</p>', NULL, NULL, '', '2022-10-26 07:19:29', '2022-10-26 07:19:29'),
(15, 36, NULL, 'ماذا تعني خانة المفوضين ؟', NULL, 'ماذا تعني خانة المفوضين ؟', NULL, '<p>المفوضين هي خانه تمكنك من تفويض شخص ينوب عنك في المنصة.</p>', NULL, NULL, '', '2022-10-26 07:21:15', '2022-10-26 07:21:15'),
(16, 50, NULL, 'شرح كيفية إضافة مستند', NULL, 'شرح كيفية إضافة مستند', NULL, '<p>هي خانة تمكنك من ادراج او تعديل المستندات في منصة جهات وهي من خلال الذهاب الى الصفحة الرئيسية للمستفيد ثم إختيار أيقونة المستندات من أعلى الصفحة ثم بعد ذلك الضغط على تعديل وملئ البيانات المطلوبة عن طريق كتابة (الاسم باللغة الإنجليزية - الاسم باللغة العربية - الرقم - وتاريخ الانتهاء) ومن ثم اختيار خانة مستند واضافته .</p>', NULL, NULL, '', '2022-10-26 07:22:42', '2022-10-26 07:22:42'),
(17, 37, NULL, 'كيف يمكنني إضافة مفوض ؟', NULL, 'كيف يمكنني إضافة مفوض ؟', NULL, '<p>بالضغط على المفوضين ثم تعديل ثم تقوم بتعبئة البيانات .. &nbsp;تضيف اسم المفوض باللغة العربية والانجليزية ورقم الجوال والبريد الالكتروني ومن ثم حفظ عند المفوضين سيظهر البيانات التي قمت باضافتها للمفوض اسمه ورقمه وبريدة الالكتروني وحالة تحكم ( تفاصيل - حذف - طباعة).</p>', NULL, NULL, '', '2022-10-26 07:22:51', '2022-10-26 07:22:51'),
(18, 52, NULL, 'شرح كيفية معرفة حالة الخطابات الواردة', NULL, 'شرح كيفية معرفة حالة الخطابات الواردة', NULL, '<p>هي خانة تمكنك من معرفة حالة الخطابات الواردة في منصة المستفيد الشخصية ويمكنك معرفة حالتها عن طريق التوجه إلى الصفحة الرئيسية للمستفيد &nbsp;ومن بعد ذلك إختيار أيقونة خطابات واردة بغرض الإعتماد من يسار الصفحة ومن ثم ستظهر لك جميع الخطابات الواردة الجديدة أو التي تحتاج إلى اعتماد أو رفض من قبل المستفيد.&nbsp;</p>', NULL, NULL, '', '2022-10-26 07:26:04', '2022-10-26 07:26:04'),
(19, 39, NULL, 'ماذا تعني خانة إنشاء جهة  ؟', NULL, 'كيف يمكنني إنشاء جهة ؟', NULL, '<p>هي خانة تستطيع من خلالها انشاء الجهة الخاصة بك عن طريق الدخول الى منصة جهات ومن ثم التسجيل فتفتح الصفحة الرئسية &nbsp;بعد الدخول مباشرة على المنصة يتم اختيار خانة انشاء جهة من ايقونة انشاء جهه على الشريط يمين الصفحة هذه الايقونة تحتوى على خانة اسم الشركة الخاصة بكم باللغة العربية والانجليزية ، وخانة الرقم الضريبى للشركة الخاصة بكم باللغة العربية والانجليزية ، وبها معلومات الاتصال الخاصة بالمالك او المدير التنفيذى الخاص بالشركة باللغة العربية والانجليزية ايضا وتظهر اسفل الشاشة خانة اضافة المعاملات او المنتجات الخاصة بكم تستطيع من خلالها اضافة ماتريد ومن ثم الضغط على حفظ وهكذا تكون قد تمت الاضافة.</p>', NULL, NULL, '', '2022-10-26 07:27:58', '2022-10-26 07:27:58'),
(20, 41, NULL, 'ماذا تعني خانة مواعيدي  ؟', NULL, 'ماذا تعني خانة مواعيدي  ؟', NULL, '<p>خدمة مواعيدي هي خدمة تتيح لك &nbsp;ترتيب المواعيد وتنسيقها وتنظيمها.</p>', NULL, NULL, '', '2022-10-26 07:29:54', '2022-10-26 07:29:54'),
(21, 42, NULL, 'كيف يمكنني إضافة موعد ؟', NULL, 'كيف يمكنني إضافة موعد ؟', NULL, '<p>بالضغط على خانة اضافة موعد يمكنك تسجيل تفاصيل موعدك وتاريخه و العنوان الذى تريد كما يمكنك اختيار طريقة التنبيه المناسبة لك سواء كانت عبر المنصة او من خلال البريد الالكترونى او كلاهما .. كما يمكنك ارفاق اى تفاصيل اضافية وللاطلاع على اى موعد خاص بك تم اضافته من قبل ، فقط اضغط على خانة مواعيدى .. ستظهر امامك جميع المواعيد المسجلة.</p>', NULL, NULL, '', '2022-10-26 07:31:13', '2022-10-26 07:31:13'),
(22, 55, NULL, 'شرح طريقة إضافة خطاب', NULL, 'شرح طريقة إضافة خطاب', NULL, '<p>هي خانة تمكنك من إضافة الخطابات في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي ومن بعد ذلك اختيارخانة خطابات واختيار إضافة خطاب بعد ذلك ستظهر لك صفحة إضافة خطاب قم بتعبئة البيانات التالية (جهة الخطاب-العنوان-نص الخطاب)واذا كنت تريد اظهار المعاينة لنص الخطاب الخاص بك قم بالضغط على (معاينة) في اسفل الصفحة وعند الانتهاء من اجراءات الخطاب اختر (حفظ).</p>', NULL, NULL, '', '2022-10-27 09:23:56', '2022-10-27 09:23:56'),
(23, 56, NULL, 'معاينة جميع الخطابات', NULL, 'معاينة جميع الخطابات', NULL, '<p>هي خانة تمكنك من إظهار جميع الخطابات الخاصة بك في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي ومن بعد ذلك اختيارخانة خطابات واختيار خطاباتي بعد ذلك ستظهر لك صفحة الخطابات قم بتعبئية زمن الخطاب الذي تبحث عنه من الى ويمكنك كتابة التاريخ هجريا او ميلاديا حسبما تريد بعد ذلك ستظهر لك جميع الخطابات التي تبحث عنها. و يمكنك عرض تفاصيل الخطاب(رقم الخطاب وعنوانه وتاريخ الخطاب ووقته والجهة والحالة واسم منشئ الخطاب) , &nbsp;او اسناده للتصديق من خلال اختيار الجهة ثم الضغط على أيقونة ارسال , &nbsp; او اسنادة للاعتماد من خلال اختيار جهة أو مستفيد فإذا كانت جهة يتم تحديد اسم الجهة وإذا كان مستفيد يتم إضافة رقم هويته ومن ثم اختيار أيقونة ارسال. &nbsp;ويمكنك حذف الخطاب &nbsp;او طباعتة من خلال الخيارات الموجودة اعلى يسار الخطاب .</p>', NULL, NULL, '', '2022-10-27 09:25:42', '2022-10-27 09:25:42'),
(24, 57, NULL, 'معاينة جميع خطابات الموظفين', NULL, 'معاينوة جميع خطابات الموظفين', NULL, '<p>هي خانة تمكنك من معرفة جميع خطابات الموظفين &nbsp;في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي ومن بعد ذلك اختيارخانة خطابات واختيار كل خطابات الموظفين بعد ذلك قم بتعبئية البيانات الخاصة بخطاب الموظف(اختر الموظف-نوع الخطاب - تاريخ الخطاب ) ويمكنك بعد الانتهاء الضغط على زر الطباعة اسفل الصفحة او اختيار عرض وسيظهر لك جمييع خطابات الموظفين.&nbsp;</p>', NULL, NULL, '', '2022-10-27 09:26:54', '2022-10-27 09:26:54'),
(25, 58, NULL, 'عرض الخطابات الواردة بغرض التصديق', NULL, 'عرض الخطابات الواردة بغرض التصديق', NULL, '<p>هي خانة تمكنك من معرفة جميع الخطابات الواردة بغرض التصديق في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي ومن بعد ذلك اختيارخانة خطابات واختيار خطابات واردة بغرض التصديق عند الضغط عليها ستظهر لك صفحة تحتوي على جميع الخطابات الواردة بغرض التصديق مع حالة كل خطاب ومن الخيارات الموجودة أعلى يسار الخطاب يمكنك عرض تفاصيل الخطاب او طباعته. والأيقونات الملونة في أعلى الصفحة تقوم بعرض الخطابات المراد عرضها &nbsp;فالأيقونة البرتقالية تعرض كل الخطابات الجديدة والايقونة الخضراء تعرض كل الخطابات الموثقة والايقونة &nbsp;الحمراء تعرض كل الخطابات المرفوضة وتستطيع &nbsp;قبول أو رفض الخطاب من خلال الأيقونات الموجودة أسفل كل خطاب.</p>', NULL, NULL, '', '2022-10-27 09:28:18', '2022-10-27 09:28:18'),
(26, 59, NULL, 'عرض الخطابات الواردة بغرض الاعتماد', NULL, 'عرض الخطابات الواردة بغرض الاعتماد', NULL, '<p>هي خانة تمكنك من معرفة الخطابات الواردة بغرض الاعتماد &nbsp;في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي ومن بعد ذلك اختيارخانة خطابات واختيار خطابات واردة بغرض الاعتماد ستظهر لك صفحة تحتوي على جميع الخطابات الواردة بغرض الاعتماد مع حالة كل خطاب وفي اعلى &nbsp;يسار الخطاب تظهر لك خيارات &nbsp;تمكنك من عرض تفاصيل الخطاب او طباعة الخطاب. &nbsp;والايقونات الملونة &nbsp;في اعلى الصفحة تقوم بعرض الخطابات المراد عرضها &nbsp;فالأيقونة البرتقالية تعرض كل الخطابات الجديدة والأيقونة الخضراء &nbsp;تعرض كل الخطابات المعتمدة والأيقونة الحمراء تعرض كل الخطابات المرفوضة وتستطيع &nbsp;قبول أو رفض الخطاب من خلال الأيقونات الموجودة أسفل كل خطاب.</p>', NULL, NULL, '', '2022-10-27 09:29:23', '2022-10-27 09:29:23'),
(27, 61, NULL, 'إضافة لوجو وتعديل بيانات الجهة', NULL, 'إضافة لوجو وتعديل بيانات الجهة', NULL, '<p>هي خانة تمكنك من اضافة لوجو اوتعديل بيانات الجهة في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي وبعد ذلك اختيار خانة الاعدادات ثم النقر على جهات ستظهر لك صفحة ببايانات تقوم بتعبئتها (اسم الجهة باللغة الانجليزية-اسم الجهة باللغة العربية- اللوجو الخاص بالجهة-الرقم الضريبي باللغة العربية والانجليزية-معلومات الاتصال بالعربية والانجليزية) ثم بعد الانتهاء النقر على حفظ في اسفل الصفحة, يمكنك معرفة الجهات التي تم ادراجك فيها كموظف في اسفل الصفحة سيظهر لك ( اسم الجهة باللغة العربية والانجليزية والرقم اضريبي ومعلومات التواصل) , ومن خلال خانة البحثsearch يمكنك البحث عن الجهة المرادة . ويمكنك تعديل أو حذف بيانات الجهة من خانة التحكم يسار كل جهة.&nbsp;</p>', NULL, NULL, '', '2022-10-27 09:31:16', '2022-10-27 09:31:16'),
(28, 62, NULL, 'اضافة أنواع المعاملات', NULL, 'اضافة أنواع المعاملات', NULL, '<p>هي خانة تمكنك من اضافة نوع معاملات للجهة المطلوبة في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي وبعد ذلك اختيار خانة الاعدادات ثم النقر على أنواع المعاملات ستظهر لك صفحة بيانات تقوم بتعبئتها (النوع &quot;طلبات المستفيد او طلبات الاقسام الداخلية &quot; -الجهات-الاسم باللغة الانجليزية- الاسم باللغة العربية-اختيار هل هي مفعلة ام لا) ثم بعد الانتهاء يمكنك اضافة خاصية وذلك عن طريق كتابة(النوع-الاسم-القيم-مطلوبة)ثم حفظ . وفي اسفل الصفحة ستجد جميع انواع المعاملات المسجلة مسبقا ويتم عرضها ب(الاسم باللغة العربية - الاسم باللغة الانجليزية - الجهات - النوع- الكود - الحالة) وتستطيع التحكم أو التعديل عن طريق النقر على أيقونة القلم بجانب كل نوع. وبالإمكان البحث عن نوع معاملة معين عن طريق استخدام خانة البحث search &nbsp;الموجودة في نافذة أنواع المعاملات.</p>', NULL, NULL, '', '2022-10-27 09:32:22', '2022-10-27 09:32:22'),
(29, 64, NULL, 'كيفية عرض المستفيدين', NULL, 'كيفية عرض المستفيدين', NULL, '<p>هي خانة تمكنك من معرفة المستفيدين في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي وبعد ذلك اختيار خانة المستفيدين ثم النقر على المستفيدين ستظهر لك صفحة بكل المستفيدين وبياناتهم المسجلة يمكنك من خلالها البحث عن المستفيدين في خانة البحث search &nbsp;عن طريق كتابة رقم الهويه أو الاسم ويمكنك تقنين البحث باستخدام الايقوانات أعلى الصفحة فاالايقونة البرتقالية تعني كل المستفيدين والايقونة الخضراء لتحديد النوع &nbsp;ذكر او انثى والايقونة الحمراء تعني حالة المستفيد هل هو مفعل أم لا, وبالضغط على ايقونة تعديل يمكنك تعديل بيانات المستفيد ومن خلال ايقونة ملف المستفيد يمكنك عرض بيانات المستفيد , وايقونة تحكم في الاسفل تمكنك من ارسال بيانات الدخول او تعديل المفوضين.</p>', NULL, NULL, '', '2022-10-27 09:33:32', '2022-10-27 09:33:32'),
(30, 65, NULL, 'عرض تقارير تسجيل المستفيدين', NULL, 'عرض تقارير تسجيل المستفيدين', NULL, '<p>هي خانة تمكنك من معرفة تقارير تسجيل للمستفيدين في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي وبعد ذلك اختيار خانة المستفيدين ثم النقر على تقرير تسجيل المستفيدين ستظهر لك صفحة بإضافة التاريخ من والى (بالميلادي والهجري) وعند الانتهاء تستطيع الطباعة عن طريق النقر اسفل الصفحة واختيار طباعة او اختيار عرض وسيتم عرض(اسم المستفيد-تاريخ التسجيل) اسفل الصفحة .</p>', NULL, NULL, '', '2022-10-27 09:34:50', '2022-10-27 09:34:50'),
(33, 67, NULL, 'ماذا تعني خانة احصائيات عامة  ؟', NULL, 'ماذا تعني خانة احصائيات عامة  ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:111.75pt; vertical-align:top; white-space:normal; width:545pt\">الاحصائيات هي خدمة تمكننا من معرفة احصائيات العمل وسير المعاملات حيث من دخولك على حسابك الشخصي ثم الانتقال الى مكتبي يسار الصفحة ثم الضغط على خانة احصائيات ثم احصائيات عامة&nbsp;<br />\r\n			<br />\r\n			والاحصائيات العامة تبين لنا حالات<br />\r\n			المعاملات بالنسب المئوية وايضاً اكثر انواع المعاملات استخداماً تظهر فيها الاسم باللغة العربية<br />\r\n			والانجليزية وجهة المعاملة وعدد المعاملات والنسبة المئوية ايضاً يوجد بالاحصائيات اخر انواع<br />\r\n			المعاملات استخداما تظهر فيها رقم ونوع وتاريخ المعاملة والمستفيد وحالة المعاملة.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:43:37', '2022-10-27 09:43:37'),
(34, 71, NULL, 'كيف يمكنني إضافة طلب ؟', NULL, 'كيف يمكنني إضافة طلب ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:124.5pt; vertical-align:top; white-space:normal; width:545pt\">عند اضافة طلب تنتقل الى مكتبي ثم الى المعاملات ثم الضغط على اضافة طلب ..<br />\r\n			<br />\r\n			هي خانه تمكنك من انشاء المعاملات الخاصة بك ولإضافة الطلب نختار مستفدين<br />\r\n			منصة جهات او عملاء واقسام داخلية ثم نوع الطلب ثم الجهات<br />\r\n			ثم اسم الموظف&nbsp;<br />\r\n			والتاريخ يدرج تلقائي ثم عنوان&nbsp; المعاملة ثم تفاصيلها ثم تحديد الاولوية ( عادي او مهمة او منخفض )<br />\r\n			ونستطيع ارفاق جميع المستندات المراد ادراجها ثم حفظ.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:45:49', '2022-10-27 09:45:49'),
(35, 72, NULL, 'ماذا تعني خانة المعاملات ؟', NULL, 'ماذا تعني خانة المعاملات ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:98.25pt; vertical-align:top; white-space:normal; width:545pt\">هي خانة تمكنك من الإطلاع على كل المعاملات..<br />\r\n			<br />\r\n			في يمين الشاشة عند الانتقال الى مكتبي ثم المعاملات ثم الضغط على المعاملات تظهر لنا جميع المعاملات التي تم ادراجها بالمنصة لجميع الموظفين يكتب ( اسم<br />\r\n			الموضوع والمستفيد واسم الموظف ونوع وتاريخ المعاملة وحالتها والأولوية وايضاً كود المعاملة )..<br />\r\n			<br />\r\n			وللبحث عن معاملة ايضاً من عند خانة المعاملات نختار المستفيد والعميل واسم الموظف وحالة<br />\r\n			المعاملة التي اريد البحث عنها وتاريخها سواء بالهجري او الميلادي من الى ثم عرض.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:47:12', '2022-10-27 09:47:12'),
(36, 73, NULL, 'ماذا تعني خانة طلب تاجيل المعاملات ؟', NULL, 'ماذا تعني خانة طلب تاجيل المعاملات ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:55.5pt; vertical-align:top; white-space:normal; width:545pt\">في يمين الشاشة عند الانتقال الى مكتبي ثم المعاملات ثم الضغط طلبات تأجيل المعاملات تظهر لك<br />\r\n			جميع المعاملات المؤجلة مدرجة بالموضوع والمستفيد والموظف ونوع المعاملة وتاريخ التأجيل والتحكم<br />\r\n			وايضاً يمكنك البحث عن معاملة مأجلة محددة من خلال خانة البحث.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:48:19', '2022-10-27 09:48:19'),
(37, 74, NULL, 'ماذا تعني خانة مراجعة معاملات موظف ؟', NULL, 'ماذا تعني خانة مراجعة معاملات موظف ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:63.0pt; text-align:right; vertical-align:bottom; white-space:normal; width:545pt\">هذه الخانة تسمح لك بمراجعة معاملات موظف معين<br />\r\n			في يمين الشاشة عند الانتقال الى مكتبي ثم المعاملات ثم الضغط علي مراجعة معاملات موظف<br />\r\n			ثم تختار ( اسم الموظف وحالة وتاريخ المعاملة من الى<br />\r\n			بالهجري او الميلادي ) ثم عرض اذا كنت فقط تريد عرض المعاملة .<br />\r\n			او طباعة اذا كنت ترغب بطباعة هذه المعاملة.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:49:07', '2022-10-27 09:49:07'),
(38, 75, NULL, 'ماذا تعني خانة معاملات لفت النظر ؟', NULL, 'ماذا تعني خانة معاملات لفت النظر ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:57.0pt; vertical-align:top; white-space:normal; width:545pt\">&nbsp;في يمين الشاشة عند الانتقال الى مكتبي ثم المعاملات ثم الضغط على معاملات لفت النظر<br />\r\n			في هذه الخانه تظهر لك المعاملات التي&nbsp; تم لفت نظر موظف لها مدرج بها اسم الموضوع والمستفيد والتعليق ونوع المعاملة والتاريخ والحالة<br />\r\n			واذا كنت تبحث عن معاملة محدده<br />\r\n			يمكنك البحث عن طريق اختيار موظف ثم التاريخ من الى هجري او ميلادي ثم عرض.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:49:51', '2022-10-27 09:49:51'),
(39, 79, NULL, 'طريقة إضافة فاتورة مبيعات', NULL, 'طريقة إضافة فاتورة مبيعات', NULL, '<p>هي خانة تمكنك من إضافة فاتورة مبيعات من خلال منصة جهات &nbsp;ولإضافة فاتورة جديدة يمكنك الذهاب للصفحة الرئيسية ثم اختيار أيقونة مكتبي ثم إضافة فاتور مبيعات من أيقونة الفواتير . &nbsp;ستظهر لك صفحة لإضافة فاتورة جديدة من خلالها تقوم بإضافة البيانات التالية : أولا تحديد اسم الجهة التي ستصدر الفاتورة , ثم تحديد ما إذا كانت &quot;جهة أو مستفيد أو عميل أو جديد&quot; , ويمكنك تحديد الفاتورة لأي جهة معنية بها من خلال النقر على &quot;اختر جهة&quot; ويمكنك اختيار أي جهة مسجلة ب&quot;جهات&quot; , ومن ثم اختيار اسم الموظف.<br />\r\nبعد ذلك يمكنك تحديد &nbsp;الصنف أسفل الصفحة سواء كان&quot;جديد،او موجود مسبقاً ومن ثم كتابة (سعر الوحده- الخصم- الكمية - الرقم الضريبي- وتحديد التاريخ &quot;ميلادي ،أوهجري&quot; - تحديد طريقة الدفع &quot;نقدي , آجل&quot;).<br />\r\nوبالامكان&quot;إضافة ملاحظات إضافية للفاتورة بعد ذلك يتم حفظ الفاتورة بالضغط على أيقونة حفظ أسفل الصفحة .</p>', NULL, NULL, '', '2022-10-27 09:50:27', '2022-10-27 09:50:27'),
(40, 76, NULL, 'ماذا تعني خانة معاملات منجزة ؟', NULL, 'ماذا تعني خانة معاملات منجزة ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:28.5pt; vertical-align:top; white-space:normal; width:545pt\">من هذة القائمة يمكن الاستعلام عن اي موظف والمعاملات التي تم إنجازها عن طريق اختيار<br />\r\n			اسم الموظف والتاريخ ثم عرض.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:50:34', '2022-10-27 09:50:34'),
(41, 77, NULL, 'ماذا تعني خانة نقل المعاملات ؟', NULL, 'ماذا تعني خانة نقل المعاملات ؟', NULL, '<table cellspacing=\"0\" style=\"width:545pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:45.0pt; vertical-align:top; white-space:normal; width:545pt\">من هذة القائمة يمكنك نقل المعاملة من جهة لتسليمها لجهة اخرى عن طريق اختيار الجهة السابقة ثم المعاملة المراد نقلها ثم الجهة الجديدة التي ستنقل المعاملة لها ثم نوع المعاملة ثم حفظ.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:51:20', '2022-10-27 09:51:20'),
(42, 80, NULL, 'عرض الفواتير', NULL, 'عرض الفواتير', NULL, '<p>هي خانة تمكنك من إظهار جميع فواتيرك المسجلة في منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية ثم اختيار أيقونة مكتبي ثم اختيار (فواتيري)من قائمة الفواتير. &nbsp;يمكنك إظهار جميع الفواتير الخاصة بك فقط وذلك بتحديد التاريخ &quot;الهجري،والميلادي&quot;, بعد ذلك بالنقر على ايقونة&quot;عرض&quot;بالاسفل يتم عرض جميع الفواتير التى تم إنشاؤها.</p>', NULL, NULL, '', '2022-10-27 09:51:50', '2022-10-27 09:51:50'),
(43, 81, NULL, 'عرض كل فواتير الموظفين', NULL, 'عرض كل فواتير الموظفين', NULL, '<p>هي خانة تمكنك من عرض جميع فواتير موظفيك وذلك من خلال الذهاب للصفحة الرئيسية ثم النقر على أيقونة مكتبي ثم اختيار كل فواتير الموظفين من قائمة الفواتير . ستظهر لك صفحة تقوم من خلالها بتحديد اسم الموظف أو اختيار كل الموظفين &nbsp;, وتحديد تاريخ إنشاء الفاتورة ،هجري،أوميلادي بعد ذلك يمكنك الاطلاع عليها بالنقر على ايقونة (عرض) أسفل الصفحة وبالامكان طباعتها من خلال أيقونة (طباعة) اوتحويلها لملف اكسيل من أيقونة (اكسيل)</p>', NULL, NULL, '', '2022-10-27 09:53:02', '2022-10-27 09:53:02'),
(44, 82, NULL, 'إضافة أصناف جديدة للفواتير', NULL, 'إضافة أصناف جديدة للفواتير', NULL, '<p>هي خانة تمكنك من إضافة أصناف جديدة لفواتيرك في منصة جهات وذلك من خلال الذهاب للصفحة الرئيسة ثم النقر على أيقونة مكتبي ثم اختيار الأصناف من قائمة الفواتير . ستظهر لك صفحة تقوم بإضافة الأصناف التي ترغب باضافتها وتحديد الجهات ثم كتابة اسم الصنف باللغة العربية و الانجليزية وبعد ذلك يتم النقر على زر حفظ الموجود اسفل الصفحة.<br />\r\nفي أسفل الصفحة يتم عرض جميع الأصناف التي تم تسجيلها مسبقا بالبيانات التالية( الاسم باللغة العربية والانجليزية - الكود - الجهه) وبالامكان التعديل على هذه الأصناف باختيار زر تعديل الموجود يسار كل صنف.&nbsp;</p>', NULL, NULL, '', '2022-10-27 09:54:20', '2022-10-27 09:54:20'),
(45, 84, NULL, 'ضبط اعدادات تقييم الموظفين', NULL, 'ضبط اعدادات تقييم الموظفين', NULL, '<p>هي خانة تستطيع من خلالها ضبط إعدادات التقييم لموظفينك في منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية ثم النقر على أيقونة مكتبي ثم أختيار (اعدادات تقييم الموظفين) من قائمة التقييم.&nbsp; ستظهر لك صفحة جديدة تحتوي على &quot;جدول تقييم الموظف تبعاً للمعاملات ويتم تقييم مدى انجازهم للمعاملة بعدد الساعات التي استغرقت لانجاز المعاملة ويتم التقييم من&quot;5&quot; .&nbsp;ثم تقييم انجاز المعاملة بعدد&quot; الأيام&quot; التي &nbsp;استغرقت لإنجاز المعاملة ويتم تقييم الموظف من&quot;5&quot; &nbsp;بعدها يتم حفظ اعدادات التقييم بالنقر على ايقونة حفظ الموجوده اسفل الصفحة.</p>', NULL, NULL, '', '2022-10-27 09:55:42', '2022-10-27 09:55:42'),
(46, 85, NULL, 'طريقة عرض تقييم الموظفين', NULL, 'طريقة عرض تقييم الموظفين', NULL, '<p>هي خانة تمكنك من عرض تقييم كل موظف وذلك من خلال الذهاب للصفحة الرئيسية ثم اختيار أيقونة مكتبي ثم اختيار عرض تقييم الموظفين من خيارات التقييم . ستظهر لك صفحة تقوم بتحديد اسم الموظف وتحديد نوع التقرير(اجمالي ،تفصيلي.) بعد ذلك تحديد التاريخ ميلادي وهجري ثم قم بالنقر على ايقونة &quot;عرض&quot; أسفل الصفحة .&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>', NULL, NULL, '', '2022-10-27 09:57:26', '2022-10-27 09:57:26'),
(47, 91, NULL, 'ماذا تعني خانة اضافة عميل او قسم داخلي ؟', NULL, 'ماذا تعني خانة اضافة عميل او قسم داخلي ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:171.0pt; text-align:center; vertical-align:middle; white-space:normal; width:557pt\">&nbsp;هي صفحة تمكنك من إضافة عميل او قسم داخلي على منصة جهات وذالك من خلال الدخول للصفحة الرئيسية لجهات ثم النقر على ايقونة مكتبي ثم اختيار اضافة عميل او قسم داخلي من قائمة العملاء والأقسام&nbsp; اختيار اضافة عميل تظهر صفحة يجب تعبئة البيانات للعميل --إضافة&nbsp; الإسم باللغتين العربية والإنجليزية وكذالك العنوان ادراجه باللغتين العربية والانجليزية ثم إضافة الملاحظات&nbsp; التي تخص العميل ومن ثم تعبئة جميع بيانات الإتصال كا البريد الإلكتروني&nbsp; والفاكس إن وجدت&nbsp; ورقم الجوال و الهاتف وإدراج رقم الهوية ومن ثم إختيار الجهة&nbsp; ثم تحديد المكان للعميل ما إذ كان العميل داخل السعودية او خارجها ومن قائمة نوع الشركة نختار ما اذ كانت الشركة رئيسية او فرعية ثم مصدر وصول العميل من طرف ونوع العقد المبرم مع جهات وحفظ البيانات .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; اما عند إضافة قسم داخلي النقر على العملاء والاقسام واختيار قسم داخلي ستظهر صفحة يجب تعبئة النموذج لتتمكن من إضافة القسم&nbsp; وتشمل البيانات الإسم باللغتين العربية والانجليزية ثم إختيار الجهة&nbsp; والضغط على حفظ&nbsp; والتالي ستظهر لك صفحة إضافة جهة اتصال&nbsp; وتحتوي بيانات الإسم&nbsp; باللغتين العربية والإنجليزية والجوال والبريد الإلكتروني ثم الضغط على حفظ والتالي او تخطي الصفحة&nbsp; ستظهر لك الصفحة التالية تحتوي على المستندات يجب تعبئة النموذج&nbsp; الإ سم باللغتين العربيه والإ نجليزية&nbsp; و الرقم&nbsp; والتاريخ ثم الحفظ والتالي لتظهر صفحة إضافة بطاقات العميل تحتوي الجهة&nbsp; بعد تعبئة النموذج الضغط على حفظ وإنتهاء .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:58:18', '2022-10-27 09:58:18'),
(48, 87, NULL, 'شرح طريقة إضافة موعد', NULL, 'شرح طريقة إضافة موعد', NULL, '<p>هي خانة تمكنك من إضافة موعد في منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية ثم النقر على أيقونة مكتبي ثم اختيار إضافة موعد من قائمة المفكرة. &nbsp;ستظهر لك صفحة يمكنك من خلالها تحديد&quot;العنوان&quot;واضافة أي تفاصيل تختص بالموعد في مربع &quot;التفاصيل&quot; وبعد ذلك يمكنك تحديد &quot;تاريخ الموعد&quot; والوقت المطلوب من خلال خانة &quot;وقت الموعد&quot; ونوع التنبيه &nbsp;اذا كنت تريده عن طريق (المنصة، أو البريد، أوالمنصة والبريد الإلكتروني معا) بعدها قم بالنقر على ايقونة&quot; حفظ&quot; الموجوده اسفل الصفحة.</p>', NULL, NULL, '', '2022-10-27 09:58:50', '2022-10-27 10:03:22'),
(49, 92, NULL, 'ماذا تعني خانة العملاء والاقسام الداخلية ؟', NULL, 'ماذا تعني خانة العملاء والاقسام الداخلية ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:103.5pt; vertical-align:top; white-space:normal; width:557pt\">للوصول لهذه الصفحة يجب الدخول من قائمة مكتبي مع العلم ان قائمة مكتبي لاتظهر لك مالم تكن مسجل كمستفيد&nbsp; الضغط على القائمة الرئيسية ومن ثم تظهرقائمة منسدلة بالنقر على مكتبي ومن ثم العملاء والاقسام الداخلية وب الضغط عليها تظهر جميع الأقسام فيمكنك الضغط على كل العملاء لمشاهدة الجميع مع امكانية الحذف والتعديل ،&nbsp; اوالضغط&nbsp; على تحكم لتعديل بطاقة العميل اوارسال بيانات االدخول او تعديل مستندات العميل وتعديل جهات الإتصال ،وأيضا ومن ايقونةالبحث تستطيع البحث عن اي عميل او قسم&nbsp; .&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 09:59:23', '2022-10-27 09:59:23'),
(50, 88, NULL, 'عرض جميع مواعيدي المسجلة', NULL, 'عرض جميع مواعيدي المسجلة', NULL, '<p>هي خانة تمكنك من عرض جميع مواعيدك المسجلة على منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية ثم النقر عل أيقونة مكتبي ثم اختيار مواعيدي من قائمة المفكرة وستظهر فيها جميع المواعيد المسجلة مسبقا ويمكنك البحث عن موعد معين وذلك بتحديد التاريخ هجري أو ميلادي &nbsp;ثم اختيار ايقونة عرض ويمكنك طباعة الموعد من خلال النقر على أيقونة طباعة. &nbsp;<br />\r\n&nbsp;</p>', NULL, NULL, '', '2022-10-27 10:00:00', '2022-10-27 10:00:00'),
(51, 93, NULL, 'ماذا تعني خانة المرفقات ؟', NULL, 'ماذا تعني خانة المرفقات ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:82.5pt; vertical-align:top; white-space:normal; width:557pt\">&nbsp; للوصول لهذه الصفحة يجب الدخول على القائمة الرئيسية ومن ثم النقر على مكتبي ـ تظهرقائمة منسدلة&nbsp; نقوم بالضغط على العملاء والاقسام&nbsp; ثم بالضغط على المرفقات&nbsp; تظهر صفحة&nbsp; تستطيع من خلالها ارفاق مرفقات&nbsp; العميل واختيار آسم وتاريخ المرفق ويمكن ادخالة بالتاريخ الهجري والميلادي ثم عرض.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 10:00:14', '2022-10-27 10:00:14'),
(52, 95, NULL, 'كيف يمكنني إضافة الاجتماع ؟', NULL, 'كيف يمكنني إضافة الاجتماع ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:120.75pt; vertical-align:top; white-space:normal; width:557pt\">&nbsp; هي صفحة تمكنك من إنشاء اجتماع ذلك من خلال الدخول على الصفحة الرئيسية ثم النقر علي ايقونة مكتبي ثم اختيار إضافة اجتماع من ايقونة الاجتماعات تظهر لنا صفحة الإجتماع نقوم بإختيار نوع الإجتماع ( اجتماع عام- اجتماع مجلس إدارة - اجتماع جمعية عمومية)&nbsp; والعنوان والمقدمة&nbsp; بعد ذالك نقوم بإضافة البنود التي سيتم التصويت عليها بعد انتهاء الاجتماع ثم إضافة منسوبي الإجتماع (منسوبي الجهة الحالية - منسوبي الجهات الأخرى&nbsp; )&nbsp; لاضافة الاعضاء يدويا باستخدام رقم الهوية و يفضل استخدامه في حال كان عدد الاعضاء قليل عن طريق الضغط علي إضافة عضو او اضافة الاعضاء تلقائي بوضع ارقام الهوية في ملف excel والضغط علي اضافة ملف في يسار الصفحة و رفع الملف<br />\r\n			&nbsp;الإجتماع العام وهو لجميع المستفيدين&nbsp; و&nbsp; اجتماع مجلس الادارة وهوخاص بمجلس الادارة . أما اجتماع الجمعية العمومية بعد اضافة البنود تاتي قائمة اضافة مرشحين&nbsp; بعد ذلك اضافة المنسوبين وإضافةإجمالي عدد الأسهم ويمكن إضافة ملفات ومرفقات ترفق مع الاجتماع المنعقد ثم الحفظ بعد الانتهاء.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 10:01:07', '2022-10-27 10:01:07'),
(53, 96, NULL, 'ماذا تعني خانة كل الاجتماعات  ؟', NULL, 'ماذا تعني خانة كل الاجتماعات  ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:225.0pt; vertical-align:top; white-space:normal; width:557pt\">&nbsp; من الدخول الى حسابك الشخصي والذهاب الى مكتبي ثم الانتقال الى الاجتماعات ثم الضغط على كل الاجتماعات<br />\r\n			<br />\r\n			عند اختيار كل الاجتماعات تظهر صفحة الاجتماعات مدرج بها كل الاجتماعات المدعو لها وبيانات الاجتماعات ( كود وعنوان ورئيس وتاريخ ووقت ونوع وحالة الاجتماع )&nbsp; .. وفي حالة البحث عن اجتماع عند خانة البحث نكتب جزء من عنوان الاجتماع او عند الحالة تختار حالة الاجتماع لتسهيل الوصول اليه.<br />\r\n			<br />\r\n			عند اختيار الاجتماع المطلوب تظهر صفحة الاجتماع ويكون رئيس الاجتماع ومنسوبي الجهة والجهات الاخرى هم المسؤولين عن بدء الاجتماع او انهاؤه او الغاؤه وبدء التصويت ويمكنهم أيضا اضافة الاعضاء والبنود ويمكنهم رؤية الحضور والغياب في الاجتماع.<br />\r\n			<br />\r\n			تظهر في الصفحة ايضاً اعضاء الاجتماع يظهر الاسم باللون الاحمر اذا لم يحضر العضو الاجتماع وباللون الاخضر اذا حضر الاجتماع وايضاً اسفل الصفحة ايقونات الاجتماع اذا كنت عضو مدعو ( حضور الاجتماع ) واذا كنت منسوب جهه ( بدء الاجتماع - بدء التصويت - اضافة اعضاء - اضافة منسوب جهه - تعديل او اضافة بند - انهاء او الغاء الاجتماع - اضافة موظف ) وكمنسوب جهه ايضاً يمكنك تعديل عنوان او مقدمة الاجتماع بالضفط على ايقونة القلم.<br />\r\n			<br />\r\n			وللتصويت على بنود الاجتماع اسفل الصفحة الضغط على ايقونة تصويت عند البند ثم اختيار موافق او غير موافق ثم تصويت.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 10:01:50', '2022-10-27 10:01:50'),
(54, 89, NULL, 'طريقة عرض مواعيد الموظفين', NULL, 'طريقة عرض مواعيد الموظفين', NULL, '<p>هي خانة تمكنك من مراجعة مواعيد كل موظف وذلك من خلال الذهاب للصفحة الرئيسية ثم النقر على أيقونة مكتبي ثم اختيار مراجعة مواعيد موظف من قائمة المفكرة. &nbsp;ستظهر لك صفحة &nbsp;يمكنك فيها اختيار اسم الموظف بالنقر على &quot; اختر الموظف&quot;وتحديد &quot;حالة الموعد( كل الحالات ،قائم ،منتهي ،محذوف) بعد ذلك تقوم بتحديد&quot; تاريخ الموعد وبعدها يمكنك عرض الموعد أو طباعته باالنقر على الأيقونات في أسفل الصفحة.</p>', NULL, NULL, '', '2022-10-27 10:01:58', '2022-10-27 10:01:58'),
(55, 98, NULL, 'كيف يمكنني إضافة موظف ؟', NULL, 'كيف يمكنني إضافة موظف ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:135.0pt; vertical-align:top; white-space:normal; width:557pt\">بالدخول على حسابك والتوجه الى مكتبي والضغط على الموظفين ثم اضافة موظف تمكنك هذه الخانه من اضافة موظف عن طريق كتابة الهويه الوطنيه الخاصه بالموظف الذي تريد اضافته ثم الضغط على علامة البحث ثم اختيار الجهة التي تريد ادراج الموظف ثم الضغط على اضافة.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 10:02:40', '2022-10-27 10:02:40'),
(56, 99, NULL, 'ماذا تعني خانة موظفين ؟', NULL, 'ماذا تعني خانة موظفين ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:143.25pt; vertical-align:top; white-space:normal; width:557pt\">عند الدخول لحسابك الشخصي والتوجه الى خانة مكتبي ثم الضغط على الموظفين عند هذه الخانه ستظهر لك صفحة جميع الموظفين الذين تمت اضافتهم بالمنشئة مدرج فيها &quot; اسم ورقم وكود &quot; الموظف ايضاً انواع المعاملات الخاصة بالموظف والمستندات وبالضغط على ايقونة القلم يمكنك التعديل على بيانات الموظف وعند الضغط عليها تظهر لك بيانات العميل بها &quot; مجموعات الموظفين - اسم الموظف باللغة العربية والانجليزية - جوال وبريد الموظف الالكتروني وهويته ورقم الكود &quot; وعند جهات العمل بها جهة الموظف وعند المستفيد بها اسم المستفيد كامل وهويته.<br />\r\n			<br />\r\n			ومن أيقونة البحث يمكن البحث من خلالها عن الموظف بالاسم.</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 10:03:28', '2022-10-27 10:03:28'),
(57, 100, NULL, 'ماذا تعني خانة سجل الموظف ؟', NULL, 'ماذا تعني خانة سجل الموظف ؟', NULL, '<table cellspacing=\"0\" style=\"width:557pt\">\r\n	<tbody>\r\n		<tr>\r\n			<td style=\"height:143.25pt; vertical-align:top; white-space:normal; width:557pt\">لعرض سجل الموظف عليك الدخول على حسابك الشخصي ثم التوجه الى مكتبي ثم الضغط على الموظفين ثم سجل الموظف تظهر لك صفحة اختر نوع السجل موظف او مديول ثم الحركات اما ان تختار الحركات كلها او التعديلات وكتابة التاريخ من الى هجري او ميلادي ثم الضغط على عرض يظهر لك جدول مكتوب به البيانات التالية ( التاريخ والوقت - المديول الحركة - تفاصيل الحركة - الحركة على ).</td>\r\n		</tr>\r\n	</tbody>\r\n</table>', NULL, NULL, '', '2022-10-27 10:04:14', '2022-10-27 10:04:14'),
(59, 103, NULL, 'طريقة إضافة المستفيدين', NULL, 'طريقة إضافة المستفيدين', NULL, '<p>هي خانة تمكنك من إضافة المستفيد في منصة جهات وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي وبعد ذلك اختيار خانة المستفيدين ثم النقر على إضافة المستفيدين ستظهر لك صفحة إضافة مستفيد تقوم من خلالها بتعبئة البيانات ( الاسم باللغة العربية والانجليزية , العنوان والملاحظات باللغة العربية والانجليزية , البريد الالكتروني , الفاكس , الجوال , التليفون , الهوية , تحديد النوع و والجنسية , ثم تحديد نوع الشركة ومن ثم اختيار اسم الشركة من القائمة المنسدلة ) ثم اختر حفظ والتالي, وبعد ذلك ستظهر لك صفحة لإضافة المفوضين فإذا كنت ترغب بإضافة مفوض تقوم بعتبئة البيانات التالية( الاسم باللغة العربية والانجليزية , رقم الجوال , البريد الالكتروني) ثم النقر على حفظ , أو النقر على أيقونة التخطي إذا كنت لاترغب بإضافة مفوض. &nbsp;</p>', NULL, NULL, '', '2022-11-01 10:08:43', '2022-11-01 10:08:43'),
(60, 104, NULL, 'عرض طلبات الجهات المعلقة', NULL, 'عرض طلبات الجهات المعلقة', NULL, '<p>هي خانة تمكنك من عرض جميع طلبات الجهات المعلقة &nbsp;في منصة جهات &nbsp;وذلك من خلال الذهاب الى الصفحة الرئيسية لجهات ثم الدخول لمكتبي ثم النقر على طلبات الجهات المعلقة من قائمة الموظفين و ستظهر لك صفحة بها قائمة الطلبات تحتوي على اسم الموظف والجهة والرقم الضريبي ومعلومات الاتصال و أنواع المعاملات وأخيرا التحكم وهي خانة تمكنك من الموافقة على الطلب أو رفضه من خلال النقر على رمز (صح للقبول , خطأ للرفض) , وبإمكانك البحث عن طلب معين عن طريق استخدام خانة البحث search .&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:10:49', '2022-11-01 10:10:49'),
(61, 105, NULL, 'طريقة عرض جميع موظفي الجهة', NULL, 'طريقة عرض جميع موظفي الجهة', NULL, '<p>هي خانة تمكنك من عرض جميع موظفي الجهة وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على خانة مكتبي وبعد ذلك النقر على موظفي الجهات من قائمة الموظفين ستظهر لك صفحة تقوم أولا بتحديد اسم الجهة من خانة الجهات ثم النقر على عرض ثم بعد ذلك ستظهر لك قائمة بجميع الاسماء المضافة كموظفين في الجهة (سيظهر الاسم باللغة العربية والانجليزية) , وبامكانك البحث عن اسم معين عن طريق كتابته في خانة البحث search , و تستطيع طباعة النتيجة من خلال النقر على زر طباعة الموجود أعلى الصفحة.&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:12:33', '2022-11-01 10:12:33'),
(62, 106, NULL, 'طريقة إضافة مجموعات للموظفين', NULL, 'طريقة إضافة مجموعات للموظفين', NULL, '<p>هي خانة تمكنك من إضافة مجموعة للموظفين وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار مجموعات الموظفين من قائمة الموظفين ستظهر لك صفحة تقوم من خلالها بإدخال مجموعة جديدة وذلك بكتابة اسم المجموعة باللغة العربية والانجليزية ثم النقر على حفظ. وفي الأسفل يتم عرض المجموعات المسجلة مسبقا ويكون عرض البيانات كالتالي( الاسم باللغة العربية والانجليزية , الكود ) وزر التحكم بجانب كل مجموعة للتعديل , وبامكانك البحث عن مجموعة معينة عن طريق كتابة اسم المجموعة في خانة البحث search .&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:14:13', '2022-11-01 10:14:13'),
(63, 107, NULL, 'ضبط اعدادات البريد الإلكتروني', NULL, 'ضبط اعدادات البريد الإلكتروني', NULL, '<p>هي خانة تمكنك من ضبط اعدادات البريد الالكتروني الخاص وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار اعدادات البريد الالكتروني من قائمة اعدادات وستظهر لك صفحة فيها البريد الالكتروني المسجل وتقوم بادراج كلمة المرور , وستعرض لك الصفحة أيضا المنفذ والخادم .&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:16:10', '2022-11-01 10:16:10'),
(64, 108, NULL, 'طريقة وضع حد أقصى للمعاملات', NULL, 'طريقة وضع حد أقصى للمعاملات', NULL, '<p>هي خانة تمكنك من وضع حد أقصى للمعاملات التي سيتم ادراجها على المنصة وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار الحد الأقصى للمعاملات من قائمة اعدادات وستظهر لك صفحة تقوم من خلالها بوضع رقم معين للحد الأقصى للمعاملات الذي ترغب باضافته ومن ثم النقر على زرالحفظ.&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:17:57', '2022-11-01 10:17:57'),
(65, 109, NULL, 'طريقة إضافة حالة للمعاملات', NULL, 'طريقة إضافة حالة للمعاملات', NULL, '<p>هي خانة تمكنك من إضافة حالة للمعاملات التي سيتم ادراجها على المنصة وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار الحالات من قائمة اعددادات وستظهر لك صفحة تقوم من خلالها بكتابة اسم الحالة التي ترغب باضافتها (باللغة العربية والانجليزية) ثم تحديد إذا كنت ترغب باضافة تنبيه للحالة أم لا ثم النقر على زر الحفظ. وسيظهر لك بالأسفل حالات المعاملات التي تمت إضافتها مسبقا مثل (مفتوحة , قيد الانتظار , متأخرة , طلب اسناد معاملة , قيد التنفيذ , توجيه وغيرها) سيظهر لك اسم الحالة باللغة العربية والانجليزية والكود و زر التحكم إذا أردت التعديل على الحالة. وبامكانك البحث عن حالة معينة عن طريق كتابة اسم الحالة في خانة البحث search .&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:19:20', '2022-11-01 10:19:20'),
(66, 110, NULL, 'طريقة عرض أو إضافة الرعاة', NULL, 'طريقة عرض أو إضافة الرعاة', NULL, '<p>هي خانة تمكنك من عرض أو إضافة الرعاة على منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار الرعاة من قائمة اعدادات وستظهر لك صفحة تقوم من خلالها بارفاق ملف صورة اللوجو الخاص بالشركة الراعية وإدراج موقعها الالكتروني ثم النقر على زر الحفظ . وسيظهر لك بالأسفل جميع الشركات الراعية المسجلة مسبقا وذلك من خلال عرض لوجو الشركة وموقعها الالكتروني وخانة التحكم إذا كنت ترغب بالتعديل أو الحذف. وبامكانك البحث عن شركة راعية معينة عن طريق استخدام خانة البحث search .&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:20:58', '2022-11-01 10:20:58'),
(67, 111, NULL, 'طريقة عرض تقرير بإضافة الجهات', NULL, 'طريقة عرض تقرير بإضافة الجهات', NULL, '<p>هي خانة تمكنك من عرض تقرير بتاريخ ووقت إضافة الجهة الى منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار تقرير الجهات من قائمة اعدادات وستظهر لك صفحة تقوم من خلالها بتحديد تايخ الفترة المرغوب بالبحث فيها (من و الى ) ومن ثم النقر على أيقونة عرض وستظهر لك الجهات المسجلة &nbsp;بتلك الفترة عن طريق عرض اسم الجهة باللغة العربية والانجليزية وتاريخ إضافة الجهة , وبامكانك طباعة نتيجة البحث من خلال النقر على زر الطباعة , وتستطيع البحث عن جهة معينة في النتيجة المعروضة من خلال خانة البحث search .&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:23:10', '2022-11-01 10:23:10'),
(68, 112, NULL, 'طريقة تحديد مستفيد افتراضي عند إضافة المعاملة', NULL, 'طريقة تحديد مستفيد افتراضي عند إضافة المعاملة', NULL, '<p>هي خانة تمكنك من تحديد المستفيد الافتراضي عند إضافة المعاملة لكي يظهر لك في الخيار الأول عند إضافة المعاملة وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار المستفيد الافتراضي لإضافة معاملة من قائمة اعدادات وستظهر لك صفحة تقوم من خلالها بتحديد المستفيد الافتراضي للمعاملات من القائمة المنسدلة ثم النقر على زر حفظ.&nbsp;</p>', NULL, NULL, '', '2022-11-01 10:25:58', '2022-11-01 10:25:58'),
(69, 113, NULL, 'ضبط اعدادات النظام', NULL, 'ضبط اعدادات النظام', NULL, '<p>هي خانة تمكنك من ضبط اعدادات النظام على منصة جهات وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار اعدادات النظام من قائمة اعدادات وستظهر لك صفحة الضبط تقوم فيها بتحديد اللغات التي توافق على صلاحية استخدامها في النظام ومن ثم تختار اللغة الأساسية ثم النقر على التالي , سيظهر لك في الصفحة التالية اسم الجهة باللغة العربية و الانجليزية ثم تنقر على التالي , ستظهر لك صفحة لضبط التوقيت المحلي للمنصة ثم التالي , واخيرا ستظهر لك صفحة فيها رقم الجوال والتليفون والفاكس والعنوان والبريد الالكتروني ونوع العملة ورمزها ومن ثم خانة لارفاق اللوجو الخاص بالجهة , حيث يمكنك ضبط جميع الاعدادات السابق ذكرها ومن ثم النقر على أيقونة حفظ أخر الصفحة , تستطيع التنقل بين الصفحات عن طريق أيقونات (السابق أو التالي) , وتسطيع عرض كامل التعديلات بعد حفظها عن طريق النقر على أيقونة عرض في آخر الصفحة.</p>', NULL, NULL, '', '2022-11-01 10:30:05', '2022-11-01 10:30:05'),
(70, 115, NULL, 'طريقة تحديد صلاحيات القوائم', NULL, 'طريقة تحديد صلاحيات القوائم', NULL, '<p>هي خانة تمكنك من وضع صلاحيات للقوائم أو الأفراد وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار صلاحيات القوائم من قائمة الصلاحيات وستظهر لك صفحة تقوم فيها أولا بتحديد النوع إذا كان موظف أو مجموعة موظفين ثم تقوم بتحديد اسم الموظف &nbsp;أو اسم القسم من القائمة المنسدلة وبعد ذلك ستظهر لك قائمة تقوم فيها بتحديد الصلاحيات &nbsp;المرغوب تحديدها من المديولات ثم النقر على زر حفظ أسفل الصفحة. &nbsp;</p>', NULL, NULL, '', '2022-11-02 07:33:51', '2022-11-02 07:33:51'),
(71, 116, NULL, 'ضبط صلاحيات الكنترول', NULL, 'ضبط صلاحيات الكنترول', NULL, '<p>هي خانة تمكنك من وضع الصلاحيات للكنترول وذلك من خلال الذهاب للصفحة الرئيسية لجهات ثم النقر على أيقونة مكتبي ثم اختيار صلاحيات الكنترول من قائمة الصلاحيات وستظهر لك صفحة تقوم فيها بتحديد النوع سواء كان موظف أو مجموعة ثم تقوم بتحديد اسم الموظف أو اسم المجموعة.</p>', NULL, NULL, '', '2022-11-02 07:34:46', '2022-11-02 07:34:46');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('admin@admin.com', '$2y$10$hsYUdLqNXoIaqrIu3q4gi.BmZTHWowYOfO.I80kWwi.pK4kyWEnhG', '2023-02-16 08:15:34');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name_ar`, `name_en`, `created_at`, `updated_at`) VALUES
(3, 'test', 'test', '2023-02-21 06:52:23', '2023-02-21 06:52:23');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_ar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `twitter` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT 0,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullname_ar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullname_en` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `identity_number` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender_type` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationality` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `name`, `fullname_ar`, `fullname_en`, `identity_number`, `email`, `phone`, `gender_type`, `nationality`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 0, 'Admin', NULL, NULL, NULL, 'admin@admin.com', NULL, NULL, NULL, NULL, '$2y$10$i9Cgj65NQwu6Iwvk/ASLEuXJZXl2F19lUsj6BP6TYlXwcuql/8ZWO', 'WWTnkCaU4NSiPsyanobAHWeInMwFP4tddeqijWGJX9RX0inp6FPZduXiG3pz', '2022-10-31 05:58:38', '2022-10-31 05:58:38'),
(2, 1, 'marwa', 'مروه', 'dfffdgfd', '54654546545', 'marwa@ex.com', '01146122539', '1', '1', NULL, '$2y$10$aAcTBTsOg/uv7uXdXAunTO4tuzHdnlKrGdIgH35SI6YlKBvtVZ.Vy', NULL, '2023-02-15 15:32:57', '2023-02-15 15:32:57');

-- --------------------------------------------------------

--
-- Table structure for table `users_websites`
--

CREATE TABLE `users_websites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nationality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identity_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_websites`
--

INSERT INTO `users_websites` (`id`, `fullname_ar`, `fullname_en`, `gender_type`, `nationality`, `identity_number`, `phone`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'sfsdf', 'fdsf', 'fdsf', 'dsfsdf', 'fdsf', 'fdsf', 'dsfsd@ex.com', '$2y$10$KZIaXc4lTzzSlA80vK6YieuguGSlpOkMY0j0WFi5tvBD1XP1P9wQS', '2023-02-14 05:19:01', '2023-02-14 05:19:01'),
(2, 'يسبيبسبسي', 'dfffdgfd', 'النوع', 'الجنسية', '54654546545', '01146122539', 'admin@admin.com', '$2y$10$toSX4tLdFYSv5vi/6dvcteDIdZhO7OSlunXQATMCRdeyaIDb.5uOG', '2023-02-15 06:19:18', '2023-02-15 06:19:18'),
(3, 'يسبيبسبسي', 'dfffdgfd', '1', '1', '987655444', '65987777777', 'admin1@admin.com', '$2y$10$EGFRXQJWtOyM4cDm8aspZeuFs69vRudORxeLdiTz6aNBQxKqX/c4e', '2023-02-15 06:21:12', '2023-02-15 06:21:12'),
(4, 'يسبيبسبسي', 'dfffdgfd', '1', '1', '9876554333', '65987744777', 'admin333@admin.com', '$2y$10$1iz7GMyj/jXf/Kj2BHo2huPEI/x90SN8vs1LhXrtqwnTRrJjRlAd6', '2023-02-15 06:22:30', '2023-02-15 06:22:30'),
(5, 'يسبيبسبسي', 'dfffdgfd', '1', '1', '43534444444', '66687744777', 'admin3336666@admin.com', '$2y$10$5075oAirCJMXslEnZirR..OegEMyWTKEzbGc8IPZ7kccRN3/uZAyS', '2023-02-15 06:24:41', '2023-02-15 06:24:41'),
(6, 'يسبيبسبسي', 'dfffdgfd', '1', '1', '43566664444', '89999999999', 'admin33366669999@admin.com', '$2y$10$2V6U5hkF/e7uRU0bgkM.juue17egylnZK2ErpscgCfh3ZaYn5Ir8y', '2023-02-15 06:25:31', '2023-02-15 06:25:31'),
(7, 'يسبيبسبسي', 'dfffdgfd', '1', '1', '43566333444', '66666669999', 'admin333666699996666@admin.com', '$2y$10$jmn9GkFD8dd6BqlswhlNOeoSxJPDvdmZB7S.5PQUhPM8kJcTsT8A2', '2023-02-15 06:26:31', '2023-02-15 06:26:31'),
(8, 'يسبيبسبسي', 'dfffdgfd', '1', '1', '43566555444', '65566669999', 'admin3336666999966555566@admin.com', '$2y$10$UKcRzEiYNELqjzrZd0sNl.DBpg47mzniE6QUSoUJz7Na26hceHYWq', '2023-02-15 06:28:25', '2023-02-15 06:28:25'),
(9, 'يببيب', 'بيلبل', '1', '1', '55555555555', '45544444444', 'marwa@ex.com', '$2y$10$DC484z5tndjBQMBU.W6/Repo4chZfF9gY3GvVeMsBy5pja42Z.jU2', '2023-02-15 07:49:46', '2023-02-15 07:49:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aboutus`
--
ALTER TABLE `aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `footer_pages`
--
ALTER TABLE `footer_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `f_a_q_s`
--
ALTER TABLE `f_a_q_s`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `users_websites`
--
ALTER TABLE `users_websites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `websiteusers_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `aboutus`
--
ALTER TABLE `aboutus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footer_pages`
--
ALTER TABLE `footer_pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `f_a_q_s`
--
ALTER TABLE `f_a_q_s`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_websites`
--
ALTER TABLE `users_websites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
