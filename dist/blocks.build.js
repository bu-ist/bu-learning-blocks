!(function (e) {
	function n(r) {
		if (t[r]) return t[r].exports;
		var l = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
	}
	var t = {};
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) ||
				Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r,
				});
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, "a", t), t;
		}),
		(n.o = function (e, n) {
			return Object.prototype.hasOwnProperty.call(e, n);
		}),
		(n.p = ""),
		n((n.s = 101));
})([
	,
	,
	function (e, n) {
		e.exports = React;
	},
	,
	,
	,
	function (e, n, t) {
		var r, l;
		!(function () {
			"use strict";
			function t() {
				for (var e = [], n = 0; n < arguments.length; n++) {
					var r = arguments[n];
					if (r) {
						var l = typeof r;
						if ("string" === l || "number" === l) e.push(r);
						else if (Array.isArray(r) && r.length) {
							var o = t.apply(null, r);
							o && e.push(o);
						} else if ("object" === l)
							for (var c in r) a.call(r, c) && r[c] && e.push(c);
					}
				}
				return e.join(" ");
			}
			var a = {}.hasOwnProperty;
			"undefined" !== typeof e && e.exports
				? ((t.default = t), (e.exports = t))
				: ((r = []),
				  void 0 !==
						(l = function () {
							return t;
						}.apply(n, r)) && (e.exports = l));
		})();
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, n, t) {
		"use strict";
		var r = t(6),
			l = t.n(r),
			a = t(103),
			o = t(104),
			c = t(105),
			i =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				};
		n.a = function (e) {
			var n = e.classes,
				t = e.header,
				r = e.onChangeHeader,
				u = e.body,
				s = e.onChangeBody,
				b = e.singleFeedback,
				m = e.feedback,
				d = e.onChangeFeedback,
				p = e.textAlignment,
				f = e.textColorControl,
				w = e.backgroundColorControl,
				g = e.fontSize,
				h = e.children,
				k = {
					textAlignment: p,
					textColorControl: f,
					backgroundColorControl: w,
					fontSize: g,
				};
			return wp.element.createElement(
				"div",
				{ className: l()("bulb-question", n) },
				wp.element.createElement(a.a, i({ value: t, onChange: r }, k)),
				wp.element.createElement(o.a, i({ value: u, onChange: s }, k)),
				h,
				wp.element.createElement(
					c.a,
					i({ singleFeedback: b, feedback: m, onChangeFeedback: d }, k)
				)
			);
		};
	},
	function (e, n, t) {
		"use strict";
		function r(e, n) {
			if (!(e instanceof n))
				throw new TypeError("Cannot call a class as a function");
		}
		function l(e, n) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !n || ("object" !== typeof n && "function" !== typeof n) ? e : n;
		}
		function a(e, n) {
			if ("function" !== typeof n && null !== n)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof n
				);
			(e.prototype = Object.create(n && n.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0,
				},
			})),
				n &&
					(Object.setPrototypeOf
						? Object.setPrototypeOf(e, n)
						: (e.__proto__ = n));
		}
		var o = (function () {
				function e(e, n) {
					for (var t = 0; t < n.length; t++) {
						var r = n[t];
						(r.enumerable = r.enumerable || !1),
							(r.configurable = !0),
							"value" in r && (r.writable = !0),
							Object.defineProperty(e, r.key, r);
					}
				}
				return function (n, t, r) {
					return t && e(n.prototype, t), r && e(n, r), n;
				};
			})(),
			c = wp.element.Component,
			i = wp.editor,
			u = i.AlignmentToolbar,
			s = i.BlockControls,
			b = (function (e) {
				function n() {
					return (
						r(this, n),
						l(
							this,
							(n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
						)
					);
				}
				return (
					a(n, e),
					o(n, [
						{
							key: "render",
							value: function () {
								var e = this.props,
									n = e.attributes.textAlignment,
									t = e.setAttributes,
									r = function (e) {
										return t({ textAlignment: e });
									};
								return wp.element.createElement(
									s,
									null,
									wp.element.createElement(u, { value: n, onChange: r })
								);
							},
						},
					]),
					n
				);
			})(c);
		n.a = b;
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, n, t) {
		"use strict";
		var r =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				},
			l = wp.editor.RichText;
		n.a = function (e) {
			return wp.element.createElement(
				l,
				r(
					{
						keepPlaceholderOnFocus: !0,
						style: {
							textAlign: e.textAlignment,
							color: e.textColorControl,
							backgroundColor: e.backgroundColorControl,
							fontSize: e.fontSize ? e.fontSize + "px" : void 0,
						},
					},
					e
				)
			);
		};
	},
	function (e, n, t) {
		"use strict";
		function r(e) {
			if (Array.isArray(e)) {
				for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
				return t;
			}
			return Array.from(e);
		}
		function l(e) {
			var n = e.answers,
				t = void 0 === n ? [] : n,
				l = e.onChangeAnswers,
				c = e.multipleCorrectAllowed,
				i = void 0 !== c && c,
				u = e.minAnswers,
				s = void 0 === u ? 1 : u,
				b = e.maxAnswers,
				m = void 0 === b ? 1 : b,
				d = e.defaultAnswer,
				p = void 0 === d ? { answer: "", feedback: "", correct: !1 } : d,
				f = e.feedbackPerAnswer,
				w = void 0 === f || f,
				g = function (e, n) {
					var a = [].concat(r(t));
					(a[n] = o({}, t[n], { answer: e })), l(a);
				},
				h = function (e, n) {
					var a = [].concat(r(t));
					(a[n] = o({}, t[n], { feedback: e })), l(a);
				},
				k = function (e) {
					var n = t.map(function (n, t) {
						return o({}, n, { correct: e === t });
					});
					l(n);
				},
				v = function (e) {
					var n = t.map(function (n, t) {
						return e === t ? o({}, n, { correct: !n.correct }) : n;
					});
					n.reduce(function (e, n) {
						return e + n.correct;
					}, 0) > 0 && l(n);
				},
				C = function () {
					if (t.length < m) {
						var e = [].concat(r(t), [p]);
						l(e);
					}
				},
				y = function (e) {
					if (t.length > s) {
						var n = t.filter(function (n, t) {
							return e !== t;
						});
						l(n);
					}
				};
			return wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"h5",
					{ className: "bulb-editor-section-label" },
					"Answers"
				),
				(function () {
					return t.map(function (e, n) {
						return wp.element.createElement(
							a.a,
							o({ key: n, index: n }, e, {
								feedbackPerAnswer: w,
								onChangeAnswerValue: g,
								onChangeFeedback: h,
								onChangeCorrect: i ? v : k,
								onRemoveAnswer: t.length > s ? y : null,
								multipleCorrectAllowed: i,
							})
						);
					});
				})(),
				(function () {
					if (t.length < m)
						return wp.element.createElement(
							"button",
							{ onClick: C },
							"Add Answer"
						);
				})()
			);
		}
		n.a = l;
		var a = t(111),
			o =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				};
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, n, t) {
		"use strict";
		Object.defineProperty(n, "__esModule", { value: !0 });
		t(102), t(110), t(114), t(117), t(120), t(124);
	},
	function (e, n, t) {
		"use strict";
		function r(e, n, t) {
			return (
				n in e
					? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[n] = t),
				e
			);
		}
		var l = t(22),
			a = t(23),
			o = t(106),
			c = t(108),
			i = (t.n(c), t(109)),
			u = (t.n(i), wp.i18n.__),
			s = wp.blocks.registerBlockType,
			b = wp.element.Fragment;
		s("bulb/question-cn", {
			title: u("BULB - Calculated Numeric", "bu-learning-blocks"),
			description: u(
				"Add a Calculated Numeric question to your learning module."
			),
			icon: "welcome-learn-more",
			category: "bu-learning-blocks",
			keywords: [
				u("bu-learning-block", "bu-learning-blocks"),
				u("BULB", "bu-learning-blocks"),
				u("Calculated Numeric Question", "bu-learning-blocks"),
			],
			edit: function (e) {
				var n = e.attributes,
					t = n.id,
					c = n.type,
					i = n.header,
					u = n.body,
					s = n.answer,
					m = n.answerRange,
					d = n.decimalPlaces,
					p = n.feedback,
					f = n.fontSize,
					w = n.textAlignment,
					g = n.textColorControl,
					h = n.backgroundColorControl,
					k = e.setAttributes,
					v = e.clientId;
				t || k({ id: "bulb_question_" + v.replace(/-/g, "") });
				var C = function (e) {
					return function (n) {
						k(r({}, e, n));
					};
				};
				return wp.element.createElement(
					"div",
					{ className: "bulb-question-cn" },
					wp.element.createElement(
						b,
						null,
						wp.element.createElement(a.a, e),
						wp.element.createElement(
							l.a,
							{
								classes: ["bulb-question-" + c],
								header: i,
								onChangeHeader: C("header"),
								body: u,
								onChangeBody: C("body"),
								singleFeedback: !0,
								feedback: p,
								onChangeFeedback: C("feedback"),
								textAlignment: w,
								textColorControl: g,
								backgroundColorControl: h,
								fontSize: f,
							},
							wp.element.createElement(o.a, {
								answer: s,
								answerRange: m,
								decimalPlaces: d,
								onChangeAnswer: C("answer"),
								onChangeAnswerRange: C("answerRange"),
								onChangeDecimalPlaces: C("decimalPlaces"),
							})
						)
					)
				);
			},
			save: function () {
				return null;
			},
		});
	},
	function (e, n, t) {
		"use strict";
		var r = t(42),
			l =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				},
			a = wp.i18n.__;
		n.a = function (e) {
			return wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"h4",
					{ className: "bulb-editor-section-label" },
					a("Question", "bu-learning-blocks")
				),
				wp.element.createElement(
					"h5",
					{ className: "bulb-editor-field-label" },
					a("Question Header", "bu-learning-blocks")
				),
				wp.element.createElement(
					r.a,
					l(
						{
							className: "question-header",
							placeholder: a("Enter Question Header", "bu-learning-blocks"),
						},
						e
					)
				)
			);
		};
	},
	function (e, n, t) {
		"use strict";
		var r = t(42),
			l =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				},
			a = wp.i18n.__;
		n.a = function (e) {
			return wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"h5",
					{ className: "bulb-editor-field-label" },
					a("Question Body", "bu-learning-blocks")
				),
				wp.element.createElement(
					r.a,
					l(
						{
							className: "question-body",
							placeholder: a("Enter Question Body", "bu-learning-blocks"),
						},
						e
					)
				)
			);
		};
	},
	function (e, n, t) {
		"use strict";
		var r = t(42),
			l =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				},
			a = wp.i18n.__;
		n.a = function (e) {
			var n = function (n) {
				var t = l({}, e.feedback, n);
				e.onChangeFeedback(t);
			};
			return e.singleFeedback
				? wp.element.createElement(
						"div",
						null,
						wp.element.createElement(
							"h5",
							null,
							a("Feedback:", "bu-learning-blocks")
						),
						wp.element.createElement(
							r.a,
							l(
								{
									className: "question-feedback",
									placeholder: a("Enter Feedback", "bu-learning-blocks"),
									value: e.feedback.correct,
									onChange: function (e) {
										return n({ correct: e, incorrect: e });
									},
								},
								e
							)
						)
				  )
				: wp.element.createElement(
						"div",
						null,
						wp.element.createElement(
							"h4",
							{ className: "bulb-editor-section-label" },
							a("Feedback", "bu-learning-blocks")
						),
						wp.element.createElement(
							"h5",
							{ className: "bulb-editor-field-label" },
							" ",
							a("Correct Feedback", "bu-learning-blocks")
						),
						wp.element.createElement(
							r.a,
							l(
								{
									className: "question-feedback",
									placeholder: a(
										"Enter Correct Feedback",
										"bu-learning-blocks"
									),
									value: e.feedback.correct,
									onChange: function (e) {
										return n({ correct: e });
									},
								},
								e
							)
						),
						wp.element.createElement(
							"h5",
							{ className: "bulb-editor-field-label" },
							a("Incorrect Feedback", "bu-learning-blocks")
						),
						wp.element.createElement(
							r.a,
							l(
								{
									className: "question-feedback",
									placeholder: a(
										"Enter Incorrect Feedback",
										"bu-learning-blocks"
									),
									value: e.feedback.incorrect,
									onChange: function (e) {
										return n({ incorrect: e });
									},
								},
								e
							)
						)
				  );
		};
	},
	function (e, n, t) {
		"use strict";
		var r = t(107),
			l = wp.element.Fragment;
		n.a = function (e) {
			var n = e.answer,
				t = e.answerRange,
				a = e.decimalPlaces,
				o = e.onChangeAnswer,
				c = e.onChangeAnswerRange,
				i = e.onChangeDecimalPlaces;
			return wp.element.createElement(
				"div",
				null,
				wp.element.createElement("h5", null, "Answer:"),
				wp.element.createElement(r.a, { value: n, onChange: o }),
				wp.element.createElement("h5", null, "Accepted Range:"),
				wp.element.createElement(r.a, { value: t, onChange: c }),
				wp.element.createElement("h5", null, "Decimal Places:"),
				wp.element.createElement("input", {
					type: "number",
					step: "1",
					min: "0",
					max: "100",
					value: a,
					onChange: function (e) {
						return i(e.target.value);
					},
				}),
				"0" !== t &&
					(function () {
						var e = parseFloat(n),
							r = parseFloat(t),
							o = (e - r).toFixed(a),
							c = (e + r).toFixed(a),
							i = 1 / Math.pow(10, a),
							u = e - i,
							s = e + i,
							b = [u, e, s].map(function (e) {
								return parseFloat(e).toFixed(a);
							}),
							m = b.map(function (e, n) {
								return wp.element.createElement("li", { key: n }, e);
							});
						return wp.element.createElement(
							"div",
							null,
							wp.element.createElement(
								"h5",
								null,
								"Examples of the nearest acceptable answers:"
							),
							m.length
								? wp.element.createElement(
										l,
										null,
										wp.element.createElement(
											"ul",
											{ className: "possible-answers-list" },
											m
										),
										wp.element.createElement(
											"div",
											null,
											" Minimum: ",
											o,
											", Maximum: ",
											c
										)
								  )
								: "No possible answers found"
						);
					})()
			);
		};
	},
	function (e, n, t) {
		"use strict";
		function r(e, n) {
			if (!(e instanceof n))
				throw new TypeError("Cannot call a class as a function");
		}
		function l(e, n) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !n || ("object" !== typeof n && "function" !== typeof n) ? e : n;
		}
		function a(e, n) {
			if ("function" !== typeof n && null !== n)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof n
				);
			(e.prototype = Object.create(n && n.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0,
				},
			})),
				n &&
					(Object.setPrototypeOf
						? Object.setPrototypeOf(e, n)
						: (e.__proto__ = n));
		}
		var o = t(2),
			c = t.n(o),
			i = (function () {
				function e(e, n) {
					for (var t = 0; t < n.length; t++) {
						var r = n[t];
						(r.enumerable = r.enumerable || !1),
							(r.configurable = !0),
							"value" in r && (r.writable = !0),
							Object.defineProperty(e, r.key, r);
					}
				}
				return function (n, t, r) {
					return t && e(n.prototype, t), r && e(n, r), n;
				};
			})(),
			u = (function (e) {
				function n(e) {
					r(this, n);
					var t = l(
						this,
						(n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
					);
					return (
						(t.state = { error: "" }), (t.onChange = t.onChange.bind(t)), t
					);
				}
				return (
					a(n, e),
					i(n, [
						{
							key: "onChange",
							value: function (e) {
								var n = e.target.value,
									t = isNaN(parseFloat(n)) ? "Invalid number" : "";
								this.props.onChange(n), this.setState({ error: t });
							},
						},
						{
							key: "render",
							value: function () {
								return wp.element.createElement(
									c.a.Fragment,
									null,
									wp.element.createElement("input", {
										type: "number",
										step: "any",
										value: this.props.value,
										onChange: this.onChange.bind(this),
									}),
									this.state.error &&
										wp.element.createElement("div", null, this.state.error)
								);
							},
						},
					]),
					n
				);
			})(c.a.Component);
		n.a = u;
	},
	function (e, n) {},
	function (e, n) {},
	function (e, n, t) {
		"use strict";
		function r(e, n, t) {
			return (
				n in e
					? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[n] = t),
				e
			);
		}
		var l = t(22),
			a = t(43),
			o = t(23),
			c = t(112),
			i = (t.n(c), t(113)),
			u = (t.n(i), wp.i18n.__),
			s = wp.blocks.registerBlockType,
			b = wp.element.Fragment;
		s("bulb/question-ma", {
			title: u("BULB - Multiple Answer", "bu-learning-blocks"),
			description: u("Add a Multiple Answer question to your learning module."),
			icon: "welcome-learn-more",
			category: "bu-learning-blocks",
			keywords: [
				u("bu-learning-block", "bu-learning-blocks"),
				u("BULB", "bu-learning-blocks"),
				u("Multiple Answer Question", "bu-learning-blocks"),
			],
			edit: function (e) {
				var n = e.attributes,
					t = n.id,
					c = n.type,
					i = n.header,
					u = n.body,
					s = n.answers,
					m = n.feedback,
					d = n.fontSize,
					p = n.textAlignment,
					f = n.textColorControl,
					w = n.backgroundColorControl,
					g = e.setAttributes,
					h = e.clientId;
				t || g({ id: "bulb_question_" + h.replace(/-/g, "") });
				var k = function (e) {
					return function (n) {
						g(r({}, e, n));
					};
				};
				return wp.element.createElement(
					b,
					null,
					wp.element.createElement(o.a, e),
					wp.element.createElement(
						l.a,
						{
							classes: ["bulb-question-" + c],
							header: i,
							onChangeHeader: k("header"),
							body: u,
							onChangeBody: k("body"),
							feedback: m,
							onChangeFeedback: k("feedback"),
							textAlignment: p,
							textColorControl: f,
							backgroundColorControl: w,
							fontSize: d,
						},
						wp.element.createElement(a.a, {
							answers: s,
							onChangeAnswers: k("answers"),
							multipleCorrectAllowed: !0,
							minAnswers: 2,
							maxAnswers: 6,
						})
					)
				);
			},
			save: function () {
				return null;
			},
		});
	},
	function (e, n, t) {
		"use strict";
		function r(e) {
			var n = e.index,
				t = e.answer,
				r = void 0 === t ? "" : t,
				l = e.feedback,
				u = void 0 === l ? "" : l,
				s = e.correct,
				b = void 0 !== s && s,
				m = e.feedbackPerAnswer,
				d = e.onChangeAnswerValue,
				p = e.onChangeFeedback,
				f = e.onChangeCorrect,
				w = e.onRemoveAnswer,
				g = e.multipleCorrectAllowed,
				h = g ? "checkbox" : "radio";
			return wp.element.createElement(
				"div",
				{ className: "bulb-editor-answer" },
				wp.element.createElement(
					"div",
					{ className: "bulb-answer-content" },
					wp.element.createElement(
						"div",
						{ className: "bulb-editor-answer-label" },
						o("Answer", "bu-learning-blocks"),
						" ",
						n + 1
					),
					wp.element.createElement(c, {
						tagName: "p",
						placeholder: o("Answer", "bu-learning-blocks"),
						keepPlaceholderOnFocus: !0,
						className: a()("answer-text"),
						onChange: function (e) {
							d(e, n);
						},
						value: r,
					}),
					m &&
						wp.element.createElement(
							i,
							null,
							wp.element.createElement(
								"div",
								{ className: "bulb-editor-answer-label-feedback" },
								o("Feedback", "bu-learning-blocks")
							),
							wp.element.createElement(c, {
								tagName: "p",
								placeholder: o("Feedback", "bu-learning-blocks"),
								keepPlaceholderOnFocus: !0,
								className: a()("answer-feedback"),
								onChange: function (e) {
									p(e, n);
								},
								value: u,
							})
						),
					wp.element.createElement(
						"strong",
						null,
						wp.element.createElement("input", {
							type: h,
							value: "1",
							onChange: function () {
								f(n);
							},
							checked: b,
						}),
						" ",
						o("Correct Answer", "bu-learning-blocks")
					)
				),
				wp.element.createElement(
					"div",
					{ className: "bulb-answer-controls" },
					w &&
						wp.element.createElement(
							"button",
							{
								onClick: function () {
									return w(n);
								},
							},
							"X"
						)
				)
			);
		}
		n.a = r;
		var l = t(6),
			a = t.n(l),
			o = wp.i18n.__,
			c = wp.editor.RichText,
			i = wp.element.Fragment;
	},
	function (e, n) {},
	function (e, n) {},
	function (e, n, t) {
		"use strict";
		function r(e, n, t) {
			return (
				n in e
					? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[n] = t),
				e
			);
		}
		var l = t(22),
			a = t(43),
			o = t(23),
			c = t(115),
			i = (t.n(c), t(116)),
			u = (t.n(i), wp.i18n.__),
			s = wp.blocks.registerBlockType,
			b = wp.element.Fragment;
		s("bulb/question-mc", {
			title: u("BULB - Multiple Choice", "bu-learning-blocks"),
			description: u("Add a Multiple Choice question to your learning module."),
			icon: "welcome-learn-more",
			category: "bu-learning-blocks",
			keywords: [
				u("bu-learning-block", "bu-learning-blocks"),
				u("BULB", "bu-learning-blocks"),
				u("Multiple Choice Question", "bu-learning-blocks"),
			],
			edit: function (e) {
				var n = e.attributes,
					t = n.id,
					c = n.type,
					i = n.header,
					u = n.body,
					s = n.answers,
					m = n.feedback,
					d = n.fontSize,
					p = n.textAlignment,
					f = n.textColorControl,
					w = n.backgroundColorControl,
					g = e.setAttributes,
					h = e.clientId;
				t || g({ id: "bulb_question_" + h.replace(/-/g, "") });
				var k = function (e) {
					return function (n) {
						g(r({}, e, n));
					};
				};
				return wp.element.createElement(
					b,
					null,
					wp.element.createElement(o.a, e),
					wp.element.createElement(
						l.a,
						{
							classes: ["bulb-question-" + c],
							header: i,
							onChangeHeader: k("header"),
							body: u,
							onChangeBody: k("body"),
							feedback: m,
							onChangeFeedback: k("feedback"),
							textAlignment: p,
							textColorControl: f,
							backgroundColorControl: w,
							fontSize: d,
						},
						wp.element.createElement(a.a, {
							answers: s,
							onChangeAnswers: k("answers"),
							multipleCorrectAllowed: !1,
							minAnswers: 2,
							maxAnswers: 6,
						})
					)
				);
			},
			save: function () {
				return null;
			},
		});
	},
	function (e, n) {},
	function (e, n) {},
	function (e, n, t) {
		"use strict";
		function r(e, n, t) {
			return (
				n in e
					? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[n] = t),
				e
			);
		}
		var l = t(22),
			a = t(43),
			o = t(23),
			c = t(118),
			i = (t.n(c), t(119)),
			u = (t.n(i), wp.i18n.__),
			s = wp.blocks.registerBlockType,
			b = wp.element.Fragment;
		s("bulb/question-tf", {
			title: u("BULB - True/False", "bu-learning-blocks"),
			description: u("Add a TRUE/FALSE question to your learning module."),
			icon: "welcome-learn-more",
			category: "bu-learning-blocks",
			keywords: [
				u("bu-learning-block", "bu-learning-blocks"),
				u("BULB", "bu-learning-blocks"),
				u("True False Question", "bu-learning-blocks"),
			],
			edit: function (e) {
				var n = e.attributes,
					t = n.id,
					c = n.type,
					i = n.header,
					u = n.body,
					s = n.answers,
					m = n.feedback,
					d = n.fontSize,
					p = n.textAlignment,
					f = n.textColorControl,
					w = n.backgroundColorControl,
					g = e.setAttributes,
					h = e.clientId;
				t || g({ id: "bulb_question_" + h.replace(/-/g, "") });
				var k = function (e) {
					return function (n) {
						g(r({}, e, n));
					};
				};
				return wp.element.createElement(
					b,
					null,
					wp.element.createElement(o.a, e),
					wp.element.createElement(
						l.a,
						{
							classes: ["bulb-question-" + c],
							header: i,
							onChangeHeader: k("header"),
							body: u,
							onChangeBody: k("body"),
							feedback: m,
							onChangeFeedback: k("feedback"),
							textAlignment: p,
							textColorControl: f,
							backgroundColorControl: w,
							fontSize: d,
						},
						wp.element.createElement(a.a, {
							answers: s,
							onChangeAnswers: k("answers"),
							multipleCorrectAllowed: !1,
							feedbackPerAnswer: !1,
							minAnswers: 2,
							maxAnswers: 2,
						})
					)
				);
			},
			save: function () {
				return null;
			},
		});
	},
	function (e, n) {},
	function (e, n) {},
	function (e, n, t) {
		"use strict";
		function r(e, n, t) {
			return (
				n in e
					? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[n] = t),
				e
			);
		}
		var l = t(22),
			a = t(23),
			o = t(121),
			c = t(122),
			i = (t.n(c), t(123)),
			u = (t.n(i), wp.i18n.__),
			s = wp.blocks.registerBlockType,
			b = wp.element.Fragment,
			m = wp.editor.InspectorControls,
			d = wp.components,
			p = d.PanelBody,
			f = d.PanelRow,
			w = d.FormToggle;
		s("bulb/question-fitb", {
			title: u("BULB - Fill in the Blank", "bu-learning-blocks"),
			description: u(
				"Add a Fill in the Blank question to your learning module."
			),
			icon: "welcome-learn-more",
			category: "bu-learning-blocks",
			keywords: [
				u("bu-learning-block", "bu-learning-blocks"),
				u("BULB", "bu-learning-blocks"),
				u("Fill in the Blank Question", "bu-learning-blocks"),
			],
			edit: function (e) {
				var n = e.attributes,
					t = n.id,
					c = n.type,
					i = n.header,
					s = n.body,
					d = n.answer,
					g = n.feedback,
					h = n.caseSensitive,
					k = n.fontSize,
					v = n.textAlignment,
					C = n.textColorControl,
					y = n.backgroundColorControl,
					E = e.setAttributes,
					A = e.clientId;
				t || E({ id: "bulb_question_" + A.replace(/-/g, "") });
				var x = function (e) {
						return function (n) {
							E(r({}, e, n));
						};
					},
					F = function (e) {
						return E({ caseSensitive: !!e.target.checked });
					};
				return wp.element.createElement(
					"div",
					{ className: "bulb-question-fitb" },
					wp.element.createElement(
						m,
						null,
						wp.element.createElement(
							p,
							null,
							wp.element.createElement(
								f,
								null,
								wp.element.createElement(
									"label",
									{ htmlFor: "bulb-fitb-case-sensitivity" },
									u("Case sensitivity", "bu-learning-blocks")
								),
								wp.element.createElement(w, {
									id: "bulb-fitb-case-sensitivity",
									label: u("Case sensitivity", "bu-learning-blocks"),
									checked: h,
									onChange: F,
								})
							)
						)
					),
					wp.element.createElement(
						b,
						null,
						wp.element.createElement(a.a, e),
						wp.element.createElement(
							l.a,
							{
								classes: ["bulb-question-" + c],
								header: i,
								onChangeHeader: x("header"),
								body: s,
								onChangeBody: x("body"),
								feedback: g,
								onChangeFeedback: x("feedback"),
								textAlignment: v,
								textColorControl: C,
								backgroundColorControl: y,
								fontSize: k,
							},
							wp.element.createElement(o.a, {
								answer: d,
								onChangeAnswer: x("answer"),
							})
						)
					)
				);
			},
			save: function () {
				return null;
			},
		});
	},
	function (e, n, t) {
		"use strict";
		n.a = function (e) {
			var n = e.answer,
				t = e.onChangeAnswer;
			return wp.element.createElement(
				"div",
				null,
				wp.element.createElement("h5", null, "Answer:"),
				wp.element.createElement("input", {
					type: "text",
					size: "50",
					value: n,
					onChange: function (e) {
						return t(e.target.value);
					},
				})
			);
		};
	},
	function (e, n) {},
	function (e, n) {},
	function (e, n, t) {
		"use strict";
		function r(e, n, t) {
			return (
				n in e
					? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[n] = t),
				e
			);
		}
		var l = t(22),
			a = t(125),
			o = t(23),
			c = wp.i18n.__,
			i = wp.blocks.registerBlockType,
			u = wp.element.Fragment;
		i("bulb/question-mat", {
			title: c("BULB - Matching", "bu-learning-blocks"),
			description: c("Add a Matching question."),
			icon: "welcome-learn-more",
			category: "bu-learning-blocks",
			keywords: [
				c("bu-learning-block", "bu-learning-blocks"),
				c("BULB", "bu-learning-blocks"),
				c("Matching Question", "bu-learning-blocks"),
			],
			edit: function (e) {
				var n = e.attributes,
					t = n.id,
					c = n.type,
					i = n.header,
					s = n.body,
					b = n.answers,
					m = n.feedback,
					d = n.fontSize,
					p = n.textAlignment,
					f = n.textColorControl,
					w = n.backgroundColorControl,
					g = e.setAttributes,
					h = e.clientId;
				t || g({ id: "bulb_question_" + h.replace(/-/g, "") });
				var k = function (e) {
					return function (n) {
						g(r({}, e, n));
					};
				};
				return wp.element.createElement(
					u,
					null,
					wp.element.createElement(o.a, e),
					wp.element.createElement(
						l.a,
						{
							classes: ["bulb-question-" + c],
							header: i,
							onChangeHeader: k("header"),
							body: s,
							onChangeBody: k("body"),
							feedback: m,
							onChangeFeedback: k("feedback"),
							textAlignment: p,
							textColorControl: f,
							backgroundColorControl: w,
							fontSize: d,
						},
						wp.element.createElement(a.a, {
							answers: b,
							onChangeAnswers: k("answers"),
							minAnswers: 2,
							maxAnswers: 12,
						})
					)
				);
			},
			save: function () {
				return null;
			},
		});
	},
	function (e, n, t) {
		"use strict";
		function r(e) {
			if (Array.isArray(e)) {
				for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
				return t;
			}
			return Array.from(e);
		}
		var l = t(126),
			a =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				};
		n.a = function (e) {
			var n = e.answers,
				t = void 0 === n ? [] : n,
				o = e.onChangeAnswers,
				c = e.minAnswers,
				i = void 0 === c ? 1 : c,
				u = e.maxAnswers,
				s = void 0 === u ? 12 : u,
				b = e.feedbackPerAnswer,
				m = void 0 === b || b,
				d = function (e, n) {
					var l = [].concat(r(t));
					(l[n] = a({}, t[n], { answer: e })), o(l);
				},
				p = function (e, n) {
					var l = [].concat(r(t));
					(l[n] = a({}, t[n], { feedback: e })), o(l);
				},
				f = function (e, n) {
					var r = t[n].correct,
						l = t.map(function (n) {
							return n.correct === e && (n.correct = r), n;
						});
					(l[n] = a({}, t[n], { correct: e })), o(l);
				},
				w = function () {
					if (t.length < s) {
						var e = [].concat(r(t), [
							{
								answer: "",
								feedback: "",
								correct: String.fromCharCode(65 + t.length),
							},
						]);
						o(e);
					}
				},
				g = function (e) {
					if (t.length > i) {
						var n = t.filter(function (n, t) {
							return e !== t;
						});
						o(n);
					}
				};
			return wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"h5",
					{ className: "bulb-editor-section-label" },
					"Pairs"
				),
				(function () {
					return t.map(function (e, n) {
						return wp.element.createElement(
							l.a,
							a({ key: n, index: n }, e, {
								answerCount: t.length,
								feedbackPerAnswer: m,
								onChangeAnswerValue: d,
								onChangeFeedback: p,
								onChangeCorrect: f,
								onRemoveAnswer: t.length > i ? g : null,
							})
						);
					});
				})(),
				(function () {
					if (t.length < s)
						return wp.element.createElement(
							"button",
							{ onClick: w },
							"Add Pair"
						);
				})()
			);
		};
	},
	function (e, n, t) {
		"use strict";
		var r = wp.i18n.__,
			l = wp.editor.RichText,
			a = wp.element.Fragment,
			o = wp.components.SelectControl;
		n.a = function (e) {
			var n = e.index,
				t = e.answer,
				c = void 0 === t ? "" : t,
				i = e.feedback,
				u = void 0 === i ? "" : i,
				s = e.correct,
				b = void 0 === s ? "" : s,
				m = e.answerCount,
				d = e.feedbackPerAnswer,
				p = e.onChangeAnswerValue,
				f = e.onChangeFeedback,
				w = e.onChangeCorrect,
				g = e.onRemoveAnswer;
			return wp.element.createElement(
				"div",
				{ className: "bulb-editor-answer" },
				wp.element.createElement(
					"div",
					{ className: "bulb-answer-content" },
					wp.element.createElement(
						"div",
						{ className: "bulb-editor-answer-label" },
						r("Prompt", "bu-learning-blocks"),
						" ",
						n + 1
					),
					wp.element.createElement(l, {
						tagName: "p",
						placeholder: r("Prompt", "bu-learning-blocks"),
						keepPlaceholderOnFocus: !0,
						className: "answer-text",
						onChange: function (e) {
							p(e, n);
						},
						value: c,
					}),
					d &&
						wp.element.createElement(
							a,
							null,
							wp.element.createElement(
								"div",
								{ className: "bulb-editor-answer-label-feedback" },
								r("Answer", "bu-learning-blocks")
							),
							wp.element.createElement(l, {
								tagName: "p",
								placeholder: r("Answer", "bu-learning-blocks"),
								keepPlaceholderOnFocus: !0,
								className: "answer-feedback",
								onChange: function (e) {
									f(e, n);
								},
								value: u,
							})
						),
					wp.element.createElement(o, {
						label: r("Sequence"),
						value: b,
						onChange: function (e) {
							return w(e, n);
						},
						options: Array.from(Array(m), function (e, n) {
							return {
								value: String.fromCharCode(65 + n),
								label: String.fromCharCode(65 + n),
							};
						}),
					}),
					wp.element.createElement(
						"div",
						{ className: "bulb-answer-controls" },
						g &&
							wp.element.createElement(
								"button",
								{
									onClick: function () {
										return g(n);
									},
								},
								"X"
							)
					)
				)
			);
		};
	},
]);
