CREATE TABLE `product` (
  `id` int PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `url_image` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `discount` int NOT NULL,
  `category` int NOT NULL
);

CREATE TABLE `category` (
  `id` int PRIMARY KEY,
  `name` varchar(255) NOT NULL
);

ALTER TABLE `product` ADD FOREIGN KEY (`category`) REFERENCES `category` (`id`);
