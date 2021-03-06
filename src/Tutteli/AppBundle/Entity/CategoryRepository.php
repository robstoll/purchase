<?php
/*
 * This file is part of the project tutteli/puma published under the Apache License 2.0
 * For the full copyright and license information, please have a look at LICENSE in the
 * root folder or visit https://github.com/robstoll/PuMa
 */

namespace Tutteli\AppBundle\Entity;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CategoryRepository extends ARepository
{
    protected function getEntityIdentifier() {
        return 'TutteliAppBundle:Category';
    }
}
