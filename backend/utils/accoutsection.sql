-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2023 at 07:39 AM
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
-- Database: `accoutsection`
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
(5, 'Civil'),
(1, 'Computer'),
(2, 'Electrical'),
(4, 'IT'),
(3, 'Mechanical');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fee_collection`
--

CREATE TABLE `fee_collection` (
  `id` int(11) NOT NULL,
  `receiptNo` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `academicYear` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `branch` varchar(50) DEFAULT NULL,
  `collegeYear` int(11) DEFAULT NULL,
  `bankName` varchar(50) DEFAULT NULL,
  `bankBranch` varchar(50) DEFAULT NULL,
  `chequeDate` date DEFAULT NULL,
  `chequeNo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fee_collection`
--

INSERT INTO `fee_collection` (`id`, `receiptNo`, `date`, `academicYear`, `name`, `branch`, `collegeYear`, `bankName`, `bankBranch`, `chequeDate`, `chequeNo`) VALUES
(1, '1040', '2023-06-13', '2023', 'Rahul', 'Computer', 3, 'SBI', 'Sion', '2023-06-13', '334');

-- --------------------------------------------------------

--
-- Table structure for table `fee_heads`
--

CREATE TABLE `fee_heads` (
  `fh_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 'Mr', 'Omkar', '223454343', 'omkar@gmail.com', '2002-08-28', 400097, 'Malad', '', '', '', 567, 2020, 2024, 'Pass', 'General', 'General', 'Computer Science', 2020),
(3, 'Mr', 'Tanishk', '', 'omkar34@gmail.com', '2002-08-13', 400097, 'malad', '', '', '', 566, 2020, 2020, 'Pass', 'General', 'General', 'Computer Science', 2020),
(4, 'Mr', 'Rahul', '', '', '2002-08-28', 400097, 'malad', '', '', '', 567, 2020, 2020, '', 'General', 'General', 'Computer Science', 0000);

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
  MODIFY `ay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `br_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fee_collection`
--
ALTER TABLE `fee_collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fee_heads`
--
ALTER TABLE `fee_heads`
  MODIFY `fh_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mode`
--
ALTER TABLE `mode`
  MODIFY `mode_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `sid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
