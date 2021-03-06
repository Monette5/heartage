/*
This file forms part of the NHS Choices Heart Age Tool.
It is ©2014 NHS Choices.
It is released under version 3 of the GNU General Public License
Source code, including a copy of the license is available at https://github.com/Antbits/heartage

It contains code derived from http://qrisk.org/lifetime/QRISK-lifetime-2011-opensource.v1.0.tgz released by ClinRisk Ltd.
*/
function Q65_female_death(){
	var self = this
	this.death = function(form_data){
		for(var i in form_data){
			eval('var '+i+' = '+form_data[i])
		}
		var a;
		var bmi_1;
		var Iethrisk = new Array(
			0,
			0,
			-0.7691412217114335100000000,
			-0.4813884489809012200000000,
			-0.6649693187337454300000000,
			-0.9806514018090445300000000,
			-0.7665687475367323200000000,
			-0.3079908452168220200000000,
			-1.1084520766868413000000000,
			-0.9729355194482460800000000
		);
		var Ismoke = new Array(
			0,
			0.2343310901409800500000000,
			0.5870690502658261200000000,
			0.7964460203072020200000000,
			1.0533145224303277000000000
		);
		var dbmi = bmi;
		dbmi=dbmi/10;
		bmi_1 = Math.pow(dbmi,.5);
		a=0;
		a += Iethrisk[ethrisk];
		a += Ismoke[smoke_cat];
		a += (Math.sqrt(bmi/10) - 1.605074524879456) * -0.1081416642130314200000000;
		a += (rati - 3.705839872360230) * 0.0273178320909109660000000;
		a += (sbp - 129.823593139648440) * -0.0008337937584279265700000;
		a += (town + 0.301369071006775) * 0.0366304184773099120000000;
		a += b_AF * 0.5484061247122409300000000;
		a += b_ra * 0.4667078978482423500000000;
		a += b_renal * 1.0288138959180866000000000;
		a += b_treatedhyp * -0.0500562994738190240000000;
		a += b_type2 * 0.6543819525425483800000000;
		a += fh_cvd * -0.4629154246984292800000000;
		return a;
	}
}