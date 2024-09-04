<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;
use App\Models\User;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $super_administrator = Role::create(['name' => 'super_administrator']);
        $administrator = Role::create(['name' => 'administrator']);
        $operator = Role::create(['name' => 'operator']);
        $director = Role::create(['name' => 'director']);
        $manager = Role::create(['name' => 'manager']);
        $supervisor = Role::create(['name' => 'supervisor']);
        $staff = Role::create(['name' => 'staff']);

        // Super Admin
        $user = User::where('username', '199407292022031002')->first();
        $user->assignRole('super_administrator', 'administrator');

    }
}
