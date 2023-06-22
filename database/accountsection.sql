-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2023 at 06:02 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `accountsection`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_year`
--

CREATE TABLE `academic_year` (
  `ay_id` int(11) NOT NULL,
  `year` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `academic_year`
--

INSERT INTO `academic_year` (`ay_id`, `year`) VALUES
(1, '2020-2024'),
(2, '2024-2028');

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `br_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`br_id`, `name`) VALUES
(6, 'AI & DS'),
(17, 'Civil'),
(1, 'Computer'),
(2, 'Electrical'),
(4, 'IT'),
(3, 'Mechanical'),
(18, 'rrr');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `name`) VALUES
(1, 'General'),
(2, 'OBC'),
(3, 'SC'),
(4, 'ST');

-- --------------------------------------------------------

--
-- Table structure for table `cat_fee_association`
--

CREATE TABLE `cat_fee_association` (
  `ass_id` int(11) NOT NULL,
  `cat_name` varchar(20) NOT NULL,
  `fh_name` varchar(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `ay_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cat_fee_association`
--

INSERT INTO `cat_fee_association` (`ass_id`, `cat_name`, `fh_name`, `amount`, `ay_id`) VALUES
(38, 'General', 'Development Fees', 5655, 0),
(39, 'General', 'Tuition Fees', 6567, 0),
(40, 'General', 'Sports Fees', 7878, 0),
(41, 'OBC', 'Development Fees', 5454, 0),
(42, 'OBC', 'Sports Fees', 66777, 0),
(43, 'OBC', 'Tuition Fees', 57675, 0),
(44, 'SC', 'Development Fees', 4564, 0),
(45, 'SC', 'Tuition Fees', 4556, 0),
(46, 'SC', 'Sports Fees', 45656, 0),
(47, 'ST', 'Development Fees', 23434, 0),
(48, 'ST', 'Tuition Fees', 4564, 0),
(49, 'ST', 'Sports Fees', 56767, 0);

-- --------------------------------------------------------

--
-- Table structure for table `fee_collection`
--

CREATE TABLE `fee_collection` (
  `id` int(11) NOT NULL,
  `receiptNo` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `academicYear` year(4) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `branch` varchar(50) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `collegeYear` int(11) DEFAULT NULL,
  `bankName` varchar(50) DEFAULT NULL,
  `bankBranch` varchar(50) DEFAULT NULL,
  `chequeDate` date DEFAULT NULL,
  `chequeNo` int(50) DEFAULT NULL,
  `fee_head` varchar(20) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fee_collection`
--

INSERT INTO `fee_collection` (`id`, `receiptNo`, `date`, `academicYear`, `name`, `branch`, `phone`, `collegeYear`, `bankName`, `bankBranch`, `chequeDate`, `chequeNo`, `fee_head`, `amount`) VALUES
(1, 11111, '2022-12-31', 2023, 'Rahul', 'Computer', '7896785463', 3, 'SBI', 'Sion', '2023-06-13', 334, 'Development Fees', 23435),
(2, 11112, '2023-06-21', 2023, 'Omkar', 'Computer ', '223454343', 3, 'sbi', 'sion', '2023-06-22', 456768, 'Tuition Fees', 54656),
(24, 11113, '2023-06-22', 2023, 'Vaibhav', 'Computer Science', '3466754757', 3, 'bob', 'sion', '2023-06-25', 345655, 'Development Fees', 23423432),
(25, 11113, '2023-06-22', 2023, 'Vaibhav', 'Computer Science', '3466754757', 3, 'bob', 'sion', '2023-06-25', 345655, 'Sports Fees', 45555),
(26, 11114, '2023-06-22', 2023, 'Vaibhav', 'Computer Science', '9846785463', 2, 'bob', 'sion', '2023-06-25', 345655, 'Tuition Fees', 5676),
(36, 11115, '2023-06-22', 2023, 'Rahul', 'Computer ', '7596645463', 3, 'ssb', 'bandra', '2023-06-28', 345678, 'Development Fees', 5676),
(40, 11115, '2023-06-22', 2023, 'Rahul', 'Computer ', '7596645463', 3, 'ssb', 'bandra', '2023-06-28', 345678, 'Development Fees', 5676),
(41, 11115, '2023-06-22', 2023, 'Rahul', 'Computer ', '7596645463', 3, 'ssb', 'bandra', '2023-06-28', 345678, '', 0),
(42, 11115, '2023-06-22', 2023, 'Rahul', 'Computer ', '7596645463', 3, 'ssb', 'bandra', '2023-06-28', 345678, '', 0),
(43, 11115, '2023-06-22', 2023, 'Rahul', 'Computer ', '7596645463', 3, 'ssb', 'bandra', '2023-06-28', 345678, '', 0),
(44, 0, '2023-06-29', 2023, NULL, '', '9876567645', 2, 'sfd', 'sdfdf', '2023-06-28', 567655, 'Sports Fees', 5676),
(45, 0, '2023-06-29', 2023, NULL, '', '9876567645', 2, 'sfd', 'sdfdf', '2023-06-28', 567655, 'Sports Fees', 5676),
(46, 0, '2023-06-29', 2023, NULL, '', '2345575754', 2, 'sfd', 'sdfdf', '2023-06-28', 567655, 'Sports Fees', 5676),
(47, 0, '2023-06-29', 2023, NULL, '', '2345575754', 2, 'sfd', 'sdfdf', '2023-06-28', 567655, 'Tuition Fees', 5676),
(48, 11116, '0000-00-00', 2023, '', '', '9846785463', 3, 'rggg', 'gfgdg', '2023-06-28', 34354, 'Development Fees', 53545),
(49, 11117, '0000-00-00', 2023, '', '', '9846785463', 3, 'rggg', 'gfgdg', '2023-06-28', 34354, 'Development Fees', 53545),
(50, 11119, '0000-00-00', 0000, NULL, NULL, '223454343', 0, '', '', '0000-00-00', 0, 'Sports Fees', 909);

-- --------------------------------------------------------

--
-- Table structure for table `fee_heads`
--

CREATE TABLE `fee_heads` (
  `fh_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fee_heads`
--

INSERT INTO `fee_heads` (`fh_id`, `name`) VALUES
(2, 'Development Fees'),
(4, 'Sports Fees'),
(1, 'Tuition Fees');

-- --------------------------------------------------------

--
-- Table structure for table `mode`
--

CREATE TABLE `mode` (
  `mode_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `sid` int(11) UNSIGNED NOT NULL,
  `title` varchar(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `pin` int(11) NOT NULL,
  `addr1` varchar(200) NOT NULL,
  `addr2` varchar(200) NOT NULL,
  `previous_institute` varchar(50) NOT NULL,
  `previous_education` varchar(50) NOT NULL,
  `gradeofmarks` int(11) NOT NULL,
  `yearofadmission` year(4) NOT NULL,
  `yearofpassing` year(4) NOT NULL,
  `current_status` varchar(10) NOT NULL,
  `category` varchar(20) NOT NULL,
  `seatType` varchar(20) NOT NULL,
  `branch` varchar(20) NOT NULL,
  `admittedtoacademicyear` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`sid`, `title`, `name`, `telephone`, `email`, `dob`, `pin`, `addr1`, `addr2`, `previous_institute`, `previous_education`, `gradeofmarks`, `yearofadmission`, `yearofpassing`, `current_status`, `category`, `seatType`, `branch`, `admittedtoacademicyear`) VALUES
(1, 'Mr', 'Omkar', '223454343', 'omkar@gmail.com', '2002-08-28', 400097, 'Malad', '', '', '', 567, 2020, 2024, 'Pass', 'General', 'General', 'Computer ', 2020),
(2, 'Mr', 'Vaibhav', '3466754757', 'vaibhav@gmail.com', '2002-09-22', 499874, 'Bandra', '', 'dfgsdg', 'sdfgdgsf', 456, 2020, 2020, 'asdfds', 'SC', 'General', 'Computer Science', 2020),
(3, 'Mr', 'Tanishk', '9846785463', 'omkar34@gmail.com', '2002-08-13', 400097, 'malad', '', '', '', 566, 2020, 2020, 'Pass', 'General', 'General', 'Computer ', 2020),
(4, 'Mr', 'Rahul', '7596645463', '', '2002-08-28', 400097, 'malad', '', '', '', 567, 2020, 2020, '', 'General', 'General', 'Computer ', 0000),
(5, 'Ms', 'Ankita Sharma', '9876567645', 'ankita@gmail.com', '1998-04-13', 400097, 'Malad', '', '', '', 567, 2020, 2024, '', 'General', 'General', 'IT', 2020),
(6, 'Mr', 'Khushi', '234557575474', 'omkar.gwde@gmail.com', '2023-06-07', 400097, 'malad', '', '', '', 456, 2020, 2020, '', 'Regular Students', 'General', 'Computer Science', 2020);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'vu1f2021050@pvppcoe.ac.in', 'omakar3030'),
(2, 'vu1f2021044@pvppcoe.ac.in', 'rohan44'),
(3, 'vu1f2021056@pvppcoe.ac.in', 'niraj56'),
(4, 'vu1f2021052@pvppcoe.ac.in', 'nabh52'),
(5, 'vu1f2021030@pvppcoe.ac.in', 'rohit30'),
(6, 'vu1f2021043@pvppcoe.ac.in', 'tejas43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_year`
--
ALTER TABLE `academic_year`
  ADD PRIMARY KEY (`ay_id`),
  ADD UNIQUE KEY `year` (`year`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`br_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `cat_fee_association`
--
ALTER TABLE `cat_fee_association`
  ADD PRIMARY KEY (`ass_id`);

--
-- Indexes for table `fee_collection`
--
ALTER TABLE `fee_collection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fee_heads`
--
ALTER TABLE `fee_heads`
  ADD PRIMARY KEY (`fh_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `mode`
--
ALTER TABLE `mode`
  ADD PRIMARY KEY (`mode_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_year`
--
ALTER TABLE `academic_year`
  MODIFY `ay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `br_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cat_fee_association`
--
ALTER TABLE `cat_fee_association`
  MODIFY `ass_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `fee_collection`
--
ALTER TABLE `fee_collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `fee_heads`
--
ALTER TABLE `fee_heads`
  MODIFY `fh_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `mode`
--
ALTER TABLE `mode`
  MODIFY `mode_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `sid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
