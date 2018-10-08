<?php
/**
 * The Template for the sidebar containing the main widget area
 *
 * @package  WordPress
 * @subpackage  Timber
 */

$context=array();
$context['sidebar_widgets'] = Timber::get_widgets('main_sidebar');
Timber::render('sidebar.twig', $context);