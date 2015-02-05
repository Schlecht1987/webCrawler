angular.module('templates.app', ['datainput/capacity.tpl.html', 'datainput/customersatisfaction.tpl.html', 'datainput/datainput.tpl.html', 'datainput/deliveryreliabilitylogistics.tpl.html', 'datainput/deliveryreliabilityupstreamconstruction.tpl.html', 'datainput/ideasprocessimprovements.tpl.html', 'datainput/labourproductivity.tpl.html', 'datainput/numberproducedcabinets.tpl.html', 'datainput/portfolio.tpl.html', 'datainput/processingtime.tpl.html', 'datainput/remainingpoints.tpl.html', 'datainput/scrappedmaterial.tpl.html', 'datainput/upstreamprocessmistakes.tpl.html', 'datainput/workingstepmistakes.tpl.html', 'delete/delete.tpl.html', 'options/options.tpl.html', 'statsview/capacity.tpl.html', 'statsview/customersatisfaction.tpl.html', 'statsview/deliveryreliabilitylogistics.tpl.html', 'statsview/deliveryreliabilityupstreamconstruction.tpl.html', 'statsview/ideasprocessimprovements.tpl.html', 'statsview/labourproductivity.tpl.html', 'statsview/numberproducedcabinets.tpl.html', 'statsview/portfolio.tpl.html', 'statsview/processingtime.tpl.html', 'statsview/remainingpoints.tpl.html', 'statsview/scrappedmaterial.tpl.html', 'statsview/upstreamprocessmistakes.tpl.html', 'statsview/workingstepmistakes.tpl.html']);

angular.module("datainput/capacity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/capacity.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_capacity' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_capacity.percent' | translate}}\" ng:model=\"data.percent\" ng:change=\"checkPercentInput()\">\n" +
    "      <span class=\"help-inline\">{{'_capacity.percent.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/customersatisfaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/customersatisfaction.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_customer.satisfaction' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_customer.name' | translate}}\" ng:model=\"data.customername\" ng:change=\"checkCustomernameInput()\">\n" +
    "      <span class=\"help-inline\">{{'_customer.name.input' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_customer.satisfaction' | translate}}\" ng:model=\"data.customersatisfaction\" ng:change=\"checkCustomerSatisfactionInput()\">{{test}}\n" +
    "      <span class=\"help-inline\">{{'_customer.satisfaction.input' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_projectnumber' | translate}}\" ng:model=\"data.projectnumber\" ng:change=\"checkProjectnumberInput()\">\n" +
    "      <span class=\"help-inline\">{{'_customer.profjectnumber.input' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div id=\"serverResponse\">\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/datainput.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/datainput.tpl.html",
    "<!-- Single button -->\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "    <div class=\"btn-group\">\n" +
    "      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        {{'_data.input' | translate}}\n" +
    "        <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li><a href=\"#/datainput-customersatisfaction\">{{'_customer.satisfaction' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-workingstepmistakes\">{{'_workingstepmistake' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-remainingpoints\">{{'_remainingPoints' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-processingtime\">{{'_processing.time' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-upstreamprocessmistakes\">{{'_upstream.process.mistakes.headline' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-portfolio\">{{'_portfolio' | translate}} / {{'_portfolio.title' | translate}}</a>\n" +
    "        </li>\n" +
    "        <!--\n" +
    "        <li><a href=\"#/datainput-labourproductivity\">{{'_labour.productivity' | translate}}</a>\n" +
    "        </li>\n" +
    "      -->\n" +
    "        <li><a href=\"#/datainput-scrappedmaterial\">{{'_scrapped.material' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-deliveryreliabilitylogistics\">{{'_delivery.reliability.logistics' | translate}} / {{'_delivery.reliability.logistics.title' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-capacity\">{{'_capacity' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li><a href=\"#/datainput-ideasprocessimprovements\">{{'_ideas.process.improvements' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li><a href=\"#/datainput-numberproducedcabinets\">{{'_number.produced.cabinets' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-deliveryreliabilityupstreamconstruction\">{{'_delivery.reliability.upstream.construction' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "\n" +
    "      </ul>\n" +
    "      <button class='btn btn-default' ng:click='goToDataDelete()'>{{'_data.delete'| translate}}</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("datainput/deliveryreliabilitylogistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/deliveryreliabilitylogistics.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_delivery.reliability.logistics' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_delivery.reliability.logistics.number.commissioning.trolleys' | translate}}\" ng:model=\"data.numberCommissioningTrolleys\" ng:change=\"checkNumberCommissioningTrolleysInput()\">\n" +
    "      <span class=\"help-inline\">{{'_delivery.reliability.logistics.number.commissioning.trolleys.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_delivery.reliability.logistics.number.incomplete.commissioning.trolleys' | translate}}\" ng:model=\"data.numberIncompleteCommissioningTrolleys\" ng:change=\"checkNumberIncompleteCommissioningTrolleysInput()\">\n" +
    "      <span class=\"help-inline\">{{'_delivery.reliability.logistics.number.incomplete.commissioning.trolleys.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/deliveryreliabilityupstreamconstruction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/deliveryreliabilityupstreamconstruction.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_delivery.reliability.upstream.construction' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_delivery.reliability.upstream.construction.deviation.in.days' | translate}}\" ng:model=\"data.deviationInDays\" ng:change=\"checkDeviationInDaysInput()\">\n" +
    "      <span class=\"help-inline\">{{'_delivery.reliability.upstream.construction.deviation.in.days.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/ideasprocessimprovements.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/ideasprocessimprovements.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_ideas.process.improvements' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_ideas.process.improvements.ideas.overall' | translate}}\" ng:model=\"data.overallIdeas\" ng:change=\"checkOverallIdeasInput()\">\n" +
    "      <span class=\"help-inline\">{{'_ideas.process.improvements.ideas.overall.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_ideas.process.improvements.implemented.ideas' | translate}}\" ng:model=\"data.implementedIdeas\" ng:change=\"checkImplementedIdeasInput()\">\n" +
    "      <span class=\"help-inline\">{{'_ideas.process.improvements.implemented.ideas.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/labourproductivity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/labourproductivity.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_labour.productivity' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_labour.productivity.avg.employee' | translate}}\" ng:model=\"data.avgEmployee\" ng:change=\"checkAvgEmployeeInput()\">\n" +
    "      <span class=\"help-inline\">{{'_labour.productivity.avg.employee.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_labour.productivity.completed.cabinets' | translate}}\" ng:model=\"data.completedCabinets\" ng:change=\"checkCompletedCabinetsInput()\">\n" +
    "      <span class=\"help-inline\">{{'_labour.productivity.completed.cabinets.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/numberproducedcabinets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/numberproducedcabinets.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_number.produced.cabinets' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_number.produced.cabinets.actual' | translate}}\" ng:model=\"data.actual\" ng:change=\"checkActualInput()\">\n" +
    "      <span class=\"help-inline\">{{'_number.produced.cabinets.actual.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_number.produced.cabinets.target' | translate}}\" ng:model=\"data.target\" ng:change=\"checkTargetInput()\">\n" +
    "      <span class=\"help-inline\">{{'_number.produced.cabinets.target.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/portfolio.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_portfolio' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_portfolio' | translate}}\" ng:model=\"data.portfolio\" ng:change=\"checkPortfolioInput()\">\n" +
    "      <span class=\"help-inline\">{{'_portfolio.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/processingtime.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/processingtime.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_processing.time' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_processing.time.ready.for.inspection' | translate}}\" ng:model=\"data.readyForInspection\" ng:change=\"checkReadyForInspectioninput()\">\n" +
    "      <span class=\"help-inline\">{{'_processing.time.ready.for.inspection.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_processing.time.remaining.points.finished' | translate}}\" ng:model=\"data.remainingPointsFinished\" ng:change=\"checkRemainingPointsFinishedInput()\">\n" +
    "      <span class=\"help-inline\">{{'_processing.time.remaining.points.finished.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" class=\"form-control \" placeholder=\"{{'_processing.time.delivered' | translate}}\" ng:model=\"data.delivered\" ng:change=\"checkDeliveredInput()\">\n" +
    "      <span class=\"help-inline\">{{'_processing.time.delivered.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/remainingpoints.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/remainingpoints.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_remainingPoints' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_remainingPoints.production' | translate}}\" ng:model=\"data.production\" ng:change=\"checkProductionInput()\">\n" +
    "      <span class=\"help-inline\">{{'_remainingPoints.production.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_remainingPoints.construction' | translate}}\" ng:model=\"data.construction\" ng:change=\"checkConstructionInput()\">\n" +
    "      <span class=\"help-inline\">{{'_remainingPoints.construction.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" class=\"form-control \" placeholder=\"{{'_remainingPoints.byDelivery' | translate}}\" ng:model=\"data.byDelivery\" ng:change=\"checkByDeliveryInput()\">\n" +
    "      <span class=\"help-inline\">{{'_remainingPoints.byDelivery.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/scrappedmaterial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/scrappedmaterial.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_scrapped.material' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_scrapped.material.cost' | translate}}\" ng:model=\"data.cost\" ng:change=\"checkCostInput()\">\n" +
    "      <span class=\"help-inline\">{{'_scrapped.material.cost.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/upstreamprocessmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/upstreamprocessmistakes.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_upstream.process.mistakes' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_upstream.process.mistakes.percent' | translate}}\" ng:model=\"data.percent\" ng:change=\"checkPercentinput()\">\n" +
    "      <span class=\"help-inline\">{{'_upstream.process.mistakes.percent.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/workingstepmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/workingstepmistakes.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_workingstepmistake' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" value=\"0\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.logistics' | translate}}\" ng:model=\"data.logistics\" ng:change=\"checkLogisticsInput()\">\n" +
    "      <span class=\"help-block \">{{'_workingstepmistake.logistics.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.mechanicalconstruction' | translate}}\" ng:model=\"data.mechanicalconstruction\" ng:change=\"checkMechanicalconstructionInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.mechanicalconstruction.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.assembly' | translate}}\" ng:model=\"data.assembly\" ng:change=\"checkAssemblyInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.assembly.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.finalassembly' | translate}}\" ng:model=\"data.finalassembly\" ng:change=\"checkFinalassemblyInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.finalassembly.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.check' | translate}}\" ng:model=\"data.check\" ng:change=\"checkCheckInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.check.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.rework' | translate}}\" ng:model=\"data.rework\" ng:change=\"checkReworkInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.rework.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-block\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("delete/delete.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("delete/delete.tpl.html",
    "<!-- Single button -->\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "    <div class=\"btn-group\">\n" +
    "      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        {{'_data.delete' | translate}}\n" +
    "\n" +
    "        <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.customerSatisfaction.getUrl, Urls.customerSatisfaction.templateUrl)\">{{'_customer.satisfaction' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.workingstepMistakes.getUrl, Urls.workingstepMistakes.templateUrl)\">{{'_workingstepmistake' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.remainingPoints.getUrl, Urls.remainingPoints.templateUrl)\">{{'_remainingPoints' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.processingTime.getUrl, Urls.processingTime.templateUrl)\">{{'_processing.time' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.upstreamProcessMistakes.getUrl, Urls.upstreamProcessMistakes.templateUrl)\">{{'_upstream.process.mistakes.headline' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.portfolio.getUrl, Urls.portfolio.templateUrl)\">{{'_portfolio' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.labourProductivity.getUrl, Urls.labourProductivity.templateUrl)\">{{'_labour.productivity' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.scrappedMaterial.getUrl, Urls.scrappedMaterial.templateUrl)\">{{'_scrapped.material' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.deliveryReliabilityLogistics.getUrl, Urls.deliveryReliabilityLogistics.templateUrl)\">{{'_delivery.reliability.logistics' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.capacity.getUrl, Urls.capacity.templateUrl)\">{{'_capacity' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.ideasProcessImprovements.getUrl, Urls.ideasProcessImprovements.templateUrl)\">{{'_ideas.process.improvements' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.numberProducedCabinets.getUrl, Urls.numberProducedCabinets.templateUrl)\">{{'_number.produced.cabinets' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.deliveryReliabilityUpstreamConstruction.getUrl, Urls.deliveryReliabilityUpstreamConstruction.templateUrl)\">{{'_delivery.reliability.upstream.construction' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"collection.url\" id=\"templateUrl\">\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("options/options.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("options/options.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_options' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{'_views' | translate}}</h4>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.remainingPoints].active\">{{'_remainingPoints' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.workingstepMistakes].active\">{{'_workingstepmistake' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.upstreanProcessMistakes].active\">{{'_upstream.process.mistakes.headline' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.portfolio].active\">{{'_portfolio' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.labourProductivity].active\">{{'_labour.productivity' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.scrappedMaterial].active\">{{'_scrapped.material' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.deliveryReliabilityLogistics].active\">{{'_delivery.reliability.logistics' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.processingTime].active\">{{'_processing.time' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.capacity].active\">{{'_capacity' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.ideasProcessImprovements].active\">{{'_ideas.process.improvements' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.customerSatisfaction].active\">{{'_customer.satisfaction' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.numberProducedCabinets].active\">{{'_number.produced.cabinets' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.deliveryReliabilityUpstreamConstruction].active\">{{'_delivery.reliability.upstream.construction' | translate}}\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <h4>{{'_presentation.interval'| translate}}</h4>\n" +
    "      <input type=\"number\" min=\"0\" value=\"0\" class=\"form-control\" placeholder=\"{{'_presentation.interval' | translate}}\" ng:model=\"data.intervalTime\" ng:change=\"intervalTimeChange()\">\n" +
    "      <span class=\"help-block \">{{presentationIntervalStatus}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{'_options.updates' | translate}}</h4>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"optionsUpdates.value\">{{'_get.server.updates' | translate}}\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{ '_options.send.to.server'| translate}}</h4>\n" +
    "      <button class=\"btn btn-primary\" ng:click=\"sendToServer()\">{{'_send.option.to.server' | translate}}</button>\n" +
    "      {{sendOptionsToServerStatus}}\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{'_admin.password'| translate}}</h4>\n" +
    "      <input type=\"{{inputType}}\" class=\"form-control\" placeholder=\"{{'_admin.password.old' | translate}}\" ng:model=\"data.oldPassword\">\n" +
    "      <span class=\"help-block \">{{oldPasswordStatus}}</span>\n" +
    "\n" +
    "      <input type=\"password\" class=\"form-control\" placeholder=\"{{'_admin.password.new' | translate}}\" ng:model=\"data.newPasswordOne\">\n" +
    "      <span class=\"help-block \">{{newPasswordOneStatus}}</span>\n" +
    "\n" +
    "      <input type=\"password\" class=\"form-control\" placeholder=\"{{'_admin.password.repeat' | translate}}\" ng:model=\"data.newPasswordTwo\">\n" +
    "      <span class=\"help-block \">{{newPasswordTwoStatus}}</span>\n" +
    "      <button class=\"btn btn-primary\" ng:click=\"sendNewPassword()\">Submit</button>\n" +
    "      <span class=\"help-block \">{{submitStatus}}</span>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("statsview/capacity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/capacity.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/customersatisfaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/customersatisfaction.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"pieChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("statsview/deliveryreliabilitylogistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/deliveryreliabilitylogistics.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/deliveryreliabilityupstreamconstruction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/deliveryreliabilityupstreamconstruction.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/ideasprocessimprovements.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/ideasprocessimprovements.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/labourproductivity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/labourproductivity.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/numberproducedcabinets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/numberproducedcabinets.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"linecharts\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/portfolio.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/processingtime.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/processingtime.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/remainingpoints.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/remainingpoints.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/scrappedmaterial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/scrappedmaterial.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/upstreamprocessmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/upstreamprocessmistakes.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/workingstepmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/workingstepmistakes.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"linecharts\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);
