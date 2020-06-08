CREATE TABLE `clima_media_temp_anno` (
  `anno` int(11) DEFAULT NULL,
  `mes` int(11) DEFAULT NULL,
  `temp_max_media` decimal(12,9) DEFAULT NULL,
  `temp_min_media` decimal(12,9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
