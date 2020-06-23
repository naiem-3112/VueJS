<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
           'name' => 'naiem',
           'email' => 'naiem.3112@gmail.com',
           'password' => bcrypt('00000000'),
        ]);
    }
}
