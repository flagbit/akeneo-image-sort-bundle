# Flagbit Image Sort for Akeneo PIM

[![Composer Analysis](https://github.com/flagbit/akeneo-image-sort-bundle/actions/workflows/composer-analysis.yml/badge.svg?branch=main)](https://github.com/flagbit/akeneo-image-sort-bundle/actions/workflows/composer-analysis.yml)

## Key Features

Provides the ability to drag and drop images on media fields to sort them in order.

## Installation

Simply install the package with the following command:

```bash
composer require flagbit/akeneo-image-sort-bundle
```

### Enable the bundle

Enable the bundle in the bundles.php

```php
<?php
// config/bundles.php

return [
    // ...
    Flagbit\Bundle\ImageSortBundle\FlagbitImageSortBundle::class => ['all' => true],
];
```

### Clear cache and build frontend files

After the installation is done, you need to clear the Akeneo PIM cache and create the frontend files either by using the Makefile or the console commands.

e.g.
`make upgrade-front`

Supported by [Flagbit GmbH & Co. KG](https://www.flagbit.de)
