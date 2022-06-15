-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2022 a las 01:02:13
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `entrenador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deportistas`
--

CREATE TABLE `deportistas` (
  `idUser` int(11) NOT NULL,
  `nombreUser` varchar(200) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `seccion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `deportistas`
--

INSERT INTO `deportistas` (`idUser`, `nombreUser`, `categoria`, `seccion`) VALUES
(44, 'Martín Barreiro Baliño', 'Senior', 'Kayak Polo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `idMarca` int(11) NOT NULL,
  `prueba_user` int(11) NOT NULL,
  `fecha` varchar(200) NOT NULL,
  `marca` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`idMarca`, `prueba_user`, `fecha`, `marca`) VALUES
(64, 68, '16/06/2022 - 00:26:24', '00:01:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pruebas`
--

CREATE TABLE `pruebas` (
  `idPrueba` int(11) NOT NULL,
  `nombrePrueba` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pruebas`
--

INSERT INTO `pruebas` (`idPrueba`, `nombrePrueba`) VALUES
(1, '1000m'),
(2, '500m'),
(3, '200m');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba_deportista`
--

CREATE TABLE `prueba_deportista` (
  `prueba_user` int(11) NOT NULL,
  `idPrueba` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prueba_deportista`
--

INSERT INTO `prueba_deportista` (`prueba_user`, `idPrueba`, `idUser`) VALUES
(68, 2, 44),
(70, 3, 44);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `deportistas`
--
ALTER TABLE `deportistas`
  ADD PRIMARY KEY (`idUser`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`idMarca`),
  ADD KEY `prueba_user` (`prueba_user`);

--
-- Indices de la tabla `pruebas`
--
ALTER TABLE `pruebas`
  ADD PRIMARY KEY (`idPrueba`);

--
-- Indices de la tabla `prueba_deportista`
--
ALTER TABLE `prueba_deportista`
  ADD PRIMARY KEY (`prueba_user`),
  ADD KEY `idPrueba` (`idPrueba`),
  ADD KEY `idUser` (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `deportistas`
--
ALTER TABLE `deportistas`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `idMarca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `pruebas`
--
ALTER TABLE `pruebas`
  MODIFY `idPrueba` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `prueba_deportista`
--
ALTER TABLE `prueba_deportista`
  MODIFY `prueba_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD CONSTRAINT `marcas_ibfk_1` FOREIGN KEY (`prueba_user`) REFERENCES `prueba_deportista` (`prueba_user`) ON DELETE CASCADE;

--
-- Filtros para la tabla `prueba_deportista`
--
ALTER TABLE `prueba_deportista`
  ADD CONSTRAINT `prueba_deportista_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `deportistas` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `prueba_deportista_ibfk_2` FOREIGN KEY (`idPrueba`) REFERENCES `pruebas` (`idPrueba`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
