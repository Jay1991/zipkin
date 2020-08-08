/*
 * Copyright 2015-2020 The OpenZipkin Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

export const FETCH_REMOTE_SERVICES_REQUEST = 'FETCH_REMOTE_SERVICES_REQUEST';
export const FETCH_REMOTE_SERVICES_SUCCESS = 'FETCH_REMOTE_SERVICES_SUCCESS';
export const FETCH_REMOTE_SERVICES_FAILURE = 'FETCH_REMOTE_SERVICES_FAILURE';
export const CLEAR_REMOTE_SERVICES = 'CLEAR_REMOTE_SERVICES';

export const FETCH_SPANS_REQUEST = 'FETCH_SPANS_REQUEST';
export const FETCH_SPANS_SUCCESS = 'FETCH_SPANS_SUCCESS';
export const FETCH_SPANS_FAILURE = 'FETCH_SPANS_FAILURE';
export const CLEAR_SPANS = 'CLEAR_SPANS';

export const TRACE_LOAD_REQUEST = 'TRACE_LOAD_REQUEST';
export const TRACE_LOAD_SUCCESS = 'TRACE_LOAD_SUCCESS';
export const TRACE_LOAD_FAILURE = 'TRACE_LOAD_FAILURE';

export const TRACES_LOAD_REQUEST = 'TRACES_LOAD_REQUEST';
export const TRACES_LOAD_SUCCESS = 'TRACES_LOAD_SUCCESS';
export const TRACES_LOAD_FAILURE = 'TRACES_LOAD_FAILURE';
export const CLEAR_TRACES = 'TRACES_RESET';

export const FETCH_DEPENDENCIES_REQUEST = 'FETCH_DEPENDENCIES_REQUEST';
export const FETCH_DEPENDENCIES_SUCCESS = 'FETCH_DEPENDENCIES_SUCCESS';
export const FETCH_DEPENDENCIES_FAILURE = 'FETCH_DEPENDENCIES_FAILURE';
export const CLEAR_DEPENDENCIES = 'CLEAR_DEPENDENCIES';

export const FETCH_AUTOCOMPLETE_KEYS_REQUEST =
  'FETCH_AUTOCOMPLETE_KEYS_REQUEST';
export const FETCH_AUTOCOMPLETE_KEYS_SUCCESS =
  'FETCH_AUTOCOMPLETE_KEYS_SUCCESS';
export const FETCH_AUTOCOMPLETE_KEYS_FAILURE =
  'FETCH_AUTOCOMPLETE_KEYS_FAILURE';

export const FETCH_AUTOCOMPLETE_VALUES_REQUEST =
  'FETCH_AUTOCOMPLETE_VALUES_REQUEST';
export const FETCH_AUTOCOMPLETE_VALUES_SUCCESS =
  'FETCH_AUTOCOMPLETE_VALUES_SUCCESS';
export const FETCH_AUTOCOMPLETE_VALUES_FAILURE =
  'FETCH_AUTOCOMPLETE_VALUES_FAILURE';

export const TRACE_VIEWER__LOAD_TRACE = 'TRACE_VIEWER__LOAD_TRACE';
export const TRACE_VIEWER__LOAD_TRACE_FAILURE =
  'TRACE_VIEWER__LOAD_TRACE_FAILURE';
