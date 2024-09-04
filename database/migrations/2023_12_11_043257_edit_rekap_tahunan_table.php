<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditRekapTahunanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rekap_tahunan', function (Blueprint $table) {
            $table->enum('tipe_survey', [
                'ikm',
                'ipk'
                ])->default('ikm');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rekap_tahunan', function (Blueprint $table) {
            //
        });
    }
}
