(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(_,v,t){"use strict";t.r(v);var r=t(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"концепция"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#концепция","aria-hidden":"true"}},[_._v("#")]),_._v(" Концепция")]),_._v(" "),t("p",[_._v("При разработке готовых элементов для повторного использования следует придерживаться следующих принципов:")]),_._v(" "),t("ul",[t("li",[_._v("Открытость к добавлению новой функциональности")]),_._v(" "),t("li",[_._v("Возможности изменять стандартное поведение")]),_._v(" "),t("li",[_._v("Переопределение поведения предпочтительнее предоставлению настроек")])]),_._v(" "),t("h2",{attrs:{id:"цеnь-проекта"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#цеnь-проекта","aria-hidden":"true"}},[_._v("#")]),_._v(" Цель проекта")]),_._v(" "),t("p",[_._v("Cовместить "),t("strong",[_._v("минимализм")]),_._v(" и "),t("strong",[_._v("легкость повторного использования имеющегося кода")]),_._v(", при этом "),t("strong",[_._v("не закрывая возможности для дальнейшей кастомизации")]),_._v(".")]),_._v(" "),t("h3",{attrs:{id:"минимаnизм"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#минимаnизм","aria-hidden":"true"}},[_._v("#")]),_._v(" Минимализм")]),_._v(" "),t("p",[_._v("Недостаток минимализма в том, что реализованной функциональности может быть недостаточно для конкретной задачи. Этот недостаток будет компенсороваться "),t("strong",[_._v("кастомизируемостью")]),_._v(" (возможностью надстроек).")]),_._v(" "),t("ul",[t("li",[_._v("Увеличение быстродействия")]),_._v(" "),t("li",[_._v("Уменьшение порога вхождения. Меньший объем кода уменьшает временя на понмание и рефакторинг.")]),_._v(" "),t("li",[_._v("Уменьшение количества ошибок")])]),_._v(" "),t("h3",{attrs:{id:"повторное-испоnьзование"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#повторное-испоnьзование","aria-hidden":"true"}},[_._v("#")]),_._v(" Повторное-использование")]),_._v(" "),t("p",[_._v("Повторное использование любят все, оно позволяет существенно сократь время разработки. Но бывает, что готовые решения "),t("strong",[_._v("плохо кастомизируемы")]),_._v(" или "),t("strong",[_._v("громоздки")]),_._v(" или используют "),t("strong",[_._v("больше зависимостей чем необходимо")]),_._v(" для своей работы. Поэтому "),t("strong",[_._v("соблюдать")]),_._v(" его нужно "),t("strong",[_._v("не во вред всем остальным пунктам")]),_._v(".")]),_._v(" "),t("p",[_._v("Инструменты достижения:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("Отказ от монолитности")]),_._v(" в пользу "),t("strong",[_._v("модульности")]),_._v(" и "),t("strong",[_._v("использования интерфейсов")]),_._v(".")]),_._v(" "),t("li",[_._v("При разработке функциональности под конкретную задачу абстрагироваться от нее и "),t("strong",[_._v("создать максимально типовое решение")]),_._v(". Или обойтись быстрым решением под задачу, и потом предоставить написание типового решения команде или сообществу. В дальнейшем можно будет заменить быстрое решение на типовое с добавлением надстройки под задачу.")])]),_._v(" "),t("h3",{attrs:{id:"кастомизация"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#кастомизация","aria-hidden":"true"}},[_._v("#")]),_._v(" Кастомизация")]),_._v(" "),t("p",[_._v("Многие знают какого это, когда подходящая готовая функциональность имеет места которые хочется изменить, но разработчики не предоставили инструментов для этого. Конечно, делать максимум настроек это тупиковый путь, потому что утяжеляет решение (препятствует минимализму) и все равно что-то остается ненастраиваемым. Предпочтительнее другой способ: оставлять потенциал для изменений и надстроек, видение таких возможностей для дальнейшего роста приходит с опытом.\nИнструменты достижения:")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("Расширяемость")]),_._v(". Использование "),t("strong",[_._v("наследования")]),_._v(" для "),t("strong",[_._v("переопределения логики")]),_._v(". Всегда оставлять точки роста для дальнейших надстроек, продумать какие части можно вынести в отдельные методы для дальнейшего переопределения.")]),_._v(" "),t("li",[_._v("Снова "),t("strong",[_._v("модульность")]),_._v(". Если какая-то часть плохо подходит под задачу, ее можно заменить на другую не требуя изменений других частей что позволит обойтись минимальными затратами.")]),_._v(" "),t("li",[t("strong",[_._v("Переопределение шаблонов")]),_._v(" в плагинах и виджетах (данный прием успешно используется в CMS Joomla но к сожалению ограничивается только шаблонами)")])]),_._v(" "),t("h3",{attrs:{id:"избежание-nавинных-зависимостей-dependency-hell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#избежание-nавинных-зависимостей-dependency-hell","aria-hidden":"true"}},[_._v("#")]),_._v(" Избежание лавинных зависимостей (Dependency-hell)")]),_._v(" "),t("p",[_._v("Большинству знакома эта ситуацией, когда установка небольшой библиотеки приводит к загрузке половины базовых компонентов фреймворка Symfony, даже если большая часть кода в них не будет использоваться в данном проекте. Для некоторых установка лишних зависимостей не является проблемой. Но она начинает ощущаться при возникновении конфликтов зависимотей, которых, я верю, можно избежать уменьшением количества неиспользуемых зависимостей.")]),_._v(" "),t("p",[_._v("Предлагаемое решение: если часть функций или классов библиотеки "),t("strong",[_._v("A")]),_._v(" использует "),t("strong",[_._v("B")]),_._v(" а другая часть использует "),t("strong",[_._v("C")]),_._v(", требуется разбить библиотеку "),t("strong",[_._v("A")]),_._v(" на две части, каждая из которых будет иметь свои зависимости. Тогда если потребутся первая часть функций, будет загружена только используемая библиотека "),t("strong",[_._v("B")]),_._v(".")]),_._v(" "),t("p",[_._v("Конечно в каждом конкретном случае надо разбираться отдельно. Чаще всего зависимости библиотек будут связаны по смыслу. И если появляются отклонения от данной тенденции, тогда и стоит обратить на это внимание.")])])}],!1,null,null,null);v.default=n.exports}}]);